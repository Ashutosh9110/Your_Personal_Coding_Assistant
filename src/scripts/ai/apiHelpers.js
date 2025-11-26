import { insertMessage } from "../chat/insertMessage";

const API_KEY = process.env.API_KEY;
let context = `
You MUST respond ONLY with a valid JSON object and NOTHING else.

Do NOT use HTML tags such as <p>, <div>, <code>, <br>, or any other markup.
Use ONLY plain text inside "content" fields.

Follow EXACTLY this structure:

{
  "1": {
    "element": "div",
    "content": "Plain text explanation only. No HTML."
  },
  "2": {
    "element": "pre",
    "content": {
      "code": "Raw code only. No HTML.",
      "language": "Specify language or null"
    }
  }
}

Rules:
- Output MUST be valid JSON.
- Do NOT wrap text in HTML.
- Do NOT add extra fields.
- Do NOT add commentary outside the JSON.
`;


function generatePrompt(option, userInput) {
  const guidelines = {
    explain: "Provide an explanation of what my code does line-by-line.",
    refactor: "Tell me how to improve my code snippet.",
    debug: "Help me identify the issue with my code.",
    convert: "Convert the code into the specified language.",
  };
  return `${guidelines[option]} ${userInput}`;
}


async function generateAIResponse(userInput) {
  const selectedRadio = document.querySelector('input[name="options"]:checked');
  const prompt = generatePrompt(selectedRadio.value, userInput);

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: context },
        { role: "user", content: prompt },
      ],
    }),
  });

  const data = await response.json();

  // If error returned
  if (!data.choices || !data.choices[0]) {
    console.error("Groq error:", data);
    throw new Error(data.error?.message || "Invalid Groq API response");
  }

  return JSON.parse(data.choices[0].message.content);
}

function displayAIResponse(answer) {
  for (let el in answer) {
    const { element, content } = answer[el];
    content?.code
      ? insertMessage(element, content.code, content.language)
      : insertMessage(element, content, null);
  }
}

export { generateAIResponse, displayAIResponse };

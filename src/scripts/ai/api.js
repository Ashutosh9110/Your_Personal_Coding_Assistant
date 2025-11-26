import { requestCompletionTime } from "./requestTime";
import { printBottomToolbarMessage } from "../ui/bottomToolbar";
import { generateAIResponse, displayAIResponse } from "./apiHelpers";

const aiStyles = [
  "js-message--chat",
  "js-message",
  "animate-slide-in",
  "animation-delay-300",
  "py-1",
];
async function processAPIResponse(userInput) {
  const startTime = Date.now();
  printBottomToolbarMessage("Initiating request...");

  try {
    const answer = await generateAIResponse(userInput);  
    displayAIResponse(answer);
  } catch (error) {
    printBottomToolbarMessage(`Request error: ${error.message}...`);
  } finally {
    requestCompletionTime(startTime);
  }
}


export { processAPIResponse, aiStyles };

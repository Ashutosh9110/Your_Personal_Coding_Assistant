# Your Personal AI Coding Assistant

A lightweight yet feature-rich AI-powered coding assistant that streamlines development workflows. It offers predefined contexts (Explain, Refactor, Debug, Convert) for focused responses, built-in chat commands for smarter guidance, automatic message encoding, Prism.js syntax-highlighted code blocks, downloadable and print-optimized chat history, and full PWA support for a seamless app-like experience.

---

## Dark Mode

<p align="center">
  <a href="https://your-personal-coding-assistant.netlify.app/" target="_blank" rel="noopener noreferrer">
    <img src="/src/assets/dark.jpg" style="max-width: 100%;">
  </a>
</p>

---

## Light Mode

<p align="center">
  <a href="https://your-personal-coding-assistant.netlify.app/" target="_blank" rel="noopener noreferrer">
    <img src="/src/assets/light.jpg" style="max-width: 100%;">
  </a>
</p>

---

## Tech Stack

- HTML5  
- CSS3  
- TailwindCSS  
- JavaScript  
- Webpack  
- Groq API  
- Prism.js  

---

## Project Structure

All source code can be found in the `/src` directory. The `/public` directory contains all production-ready code, bundled and optimized using Webpack.

### **Webpack Configuration**

- Processes CSS + PostCSS (Tailwind)
- Bundles modularized JavaScript files
- Injects meta tags and favicon into HTML
- Injects API key from `.env` (dev) or DefinePlugin (prod)
- Generates the `manifest.json` for PWA
- Minifies CSS and JavaScript

---

## Styles (`/styles`)

- **`main.css`** — Tailwind overrides + dynamic element styling  
- **`prism.css`** — Laserwave theme with slight customizations  
- **`download.css`** — Styles for downloadable `.html` chat history  

---

## Data (`/data`)

- **`chatCommands.json`** — Built-in chat commands (plain text or escaped HTML)  
- **`defaultMessages.json`** — Default guidelines per chat mode  

---

## Scripts (`/scripts`)

- **`/ai`** — Handles Groq API interactions  
- **`/chat`** — User input, dynamic content injection, chat history, exporting  
- **`/ui`** — Theme, typewriter animation, radio selection, UI controls  

---

## Key Features

### **Design**

- Fully responsive without traditional media queries  
- Custom Tailwind setup (fonts, screens, animations)  
- Custom Prism.js syntax highlighting (light + dark themes)  
- Typewriter animation with custom cursor  
- Stylish downloadable `.html` chat history  
- Response timer with color indicators  

### **Interactive Elements**

- Built-in chat commands (navigate the app using only the keyboard)  
- Top toolbar: copy latest code, save chat, clear chat, export HTML, show commands  
- Bottom toolbar: shows last task + response time  
- Custom-styled radio buttons for task selection  

### **Behind the Scenes**

- Four prompt options with meaningful context (Explain, Refactor, Debug, Convert)  
- Automatic input encoding before sending to API  
- JSON-structured AI responses parsed and styled dynamically  
- Chat history + user preferences saved in browser storage  
- Dynamic syntax highlighting applied after DOM insertion  
- PWA support for a native-like experience  

---

## Limitations

- **Character Limit:** 1000 characters total per request  
  - 300 reserved for system prompt → user gets 700 chars  
- **Complex Code:** Large codebases should be split into smaller chunks  
- **Guideline Sensitivity:** Ensure correct mode selection for best results  
- **Language Support:** Tested mostly with JS, CSS/SASS, TS, Python, Java, Lua, and COBOL  

---

## Available Scripts

### `npm run build`
- Builds in production mode  
- Sets `NODE_ENV=production`

### `npm run start`
- Starts development server  
- Sets `NODE_ENV=development`

---

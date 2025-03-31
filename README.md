# Description
**NanoTerms** is a simple framework to display a glossary of terms for a specific audience. It is powered by a single `JSON` file. 

These are the underlying goals of the project:
- Quick to load, quick to answer (30 seconds to understand)
- Require no authorization to _view_
- Built for **mobile devices**.
- Explain just enough to keep someone connected to the conversation that introduced the new terminology.

## Use Case
When attending a talk on AI as a relative newcomer to AI, you hear an acronym or word that you don't understand. You quickly scan a QR code on the wall, bringing you to NanoTerms, and look for the word mentioned.
Reading the _short description_ doesn't satisfy your curiosity, so you click through to the detailed definition and examples. After 20 seconds, you feel comfortable enough with the term to return your focus to the speaker.

## Technology
This simple project is built on Svelte 5 (_Runes_) and Tailwind v4. It uses JavaScript (rather than TypeScript). 

## Loading the project

Use the GitHub command to **fork** a copy of the project and **git pull** it to your local IDE.

## Developing

Once you've created the project and installed dependencies with `npm install` (or `pnpm install`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Contributing

Push a new branch and open a pull request!


import fs from "fs-extra";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { fileURLToPath } from "url";
import { teas } from "../src/data.js";
import App from "../src/App.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.resolve(__dirname, "../dist");
const htmlTemplatePath = path.resolve(__dirname, "../src/template.html");
const outputHtmlPath = path.resolve(outDir, "index.html");

try {
  // Read the HTML template
  const template = await fs.readFile(htmlTemplatePath, "utf-8");

  // Render React component to static HTML
  const appHtml = ReactDOMServer.renderToStaticMarkup(
    React.createElement(App, { teas })
  );

  // Inject rendered HTML into the template
  const finalHtml = template.replace("<!--app-->", appHtml);

  // Ensure the output directory exists and write the HTML file
  await fs.ensureDir(outDir);
  await fs.writeFile(outputHtmlPath, finalHtml);

  console.log("HTML file generated successfully at:", outputHtmlPath);
} catch (error) {
  console.error("Error occurred while generating HTML:", error);
}



// ..................................................

// import fs from "fs-extra";
// import path from "path";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import { fileURLToPath } from "url";
// import { teas } from "../src/data.js";
// import App from "../src/App.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const outDir = path.resolve(__dirname, "../dist");
// const htmlTemplatePath = path.resolve(__dirname, "../src/template.html");
// const outputHtmlPath = path.resolve(outDir, "index.html");

// const template = await fs.readFile(htmlTemplatePath, "utf-8");

// const appHtml = ReactDOMServer.renderToStaticMarkup(
//   React.createElement(App, { teas })
// );

// const finalHtml = template.replace("<!--app-->", appHtml);

// await fs.ensureDir(outDir);
// await fs.writeFile(outputHtmlPath, finalHtml);

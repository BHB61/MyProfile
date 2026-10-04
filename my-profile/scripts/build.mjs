import { build, createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

await build();
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const html = await readFile("dist/index.html", "utf8");
  const markup = renderToString(createElement(App));
  if (!/<h1(?:\s|>)/.test(markup))
    throw new Error("Prerender did not produce the portfolio.");
  await writeFile(
    "dist/index.html",
    html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`),
  );
  console.log(
    "Portfolio prerendered: content is available without JavaScript.",
  );
} finally {
  await server.close();
}

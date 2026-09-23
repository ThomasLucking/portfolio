import { serve } from "bun";
import { readdir } from "node:fs/promises";
import index from "./index.html";

// Serve files from public/ at the site root (cv.pdf, og.png, ...), mirroring the build.
const publicDir = new URL("../public/", import.meta.url).pathname;
const publicRoutes = Object.fromEntries(
  (await readdir(publicDir).catch(() => [] as string[]))
    .filter((name) => !name.startsWith("."))
    .map((name) => [`/${name}`, () => new Response(Bun.file(publicDir + name))]),
);

const server = serve({
  routes: {
    ...publicRoutes,
    "/*": index,
  },
  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Server running at ${server.url}`);

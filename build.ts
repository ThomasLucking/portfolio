import tailwind from "bun-plugin-tailwind";
import { cp, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });

const result = await Bun.build({
  entrypoints: ["src/index.html"],
  outdir: "dist",
  plugins: [tailwind],
  minify: true,
  target: "browser",
  sourcemap: "linked",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

// Static files (cv.pdf, og.png, ...) are copied as-is to the site root.
await cp("public", "dist", { recursive: true }).catch(() => {});

console.log(`Built ${result.outputs.length} files to dist/`);

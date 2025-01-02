import { readFile, writeFile } from "node:fs/promises";
import packageJson from "./package.json";

const prompt = await readFile("prompt/prompt.txt", "utf8");

const files = ["latest", packageJson.version];

for (const file of files) {
  await writeFile(
    `prompt/${file}.json`,
    JSON.stringify(
      {
        value: prompt,
      },
      null,
      2,
    ),
  );
}

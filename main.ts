import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original dad joke, written fresh for this entry.
const LINE = "I asked my wife why she was whispering to the eggs. She said she was trying to crack them up before breakfast.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `Entry line must be 1-200 characters, got ${LINE.length}.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Deterministic output: the exact line, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

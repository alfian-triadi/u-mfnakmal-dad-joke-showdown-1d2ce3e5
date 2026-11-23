import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original dad joke, written fresh for this entry.
const LINE = "I asked my daughter why she brought a ladder to dinner. She said the stakes were high, but I said the steaks were already on the table.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `Entry line must be 1-200 characters, got ${LINE.length}.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Deterministic output: the exact line, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

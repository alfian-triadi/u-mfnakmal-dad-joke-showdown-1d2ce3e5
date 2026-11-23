import { existsSync, mkdirSync, writeFileSync } from "node:fs";

// A fresh dad joke, made up on the spot for this showdown entry.
const DAD_JOKE =
  "My son asked why the gravy boat never gets seasick. I told him it's because it always stays on course.";

// The bounty wants one line, somewhere between 1 and 200 characters.
const jokeLength = DAD_JOKE.length;
if (jokeLength === 0 || jokeLength > 200) {
  throw new Error(
    `Dad joke must be 1-200 characters, but it is ${jokeLength}.`,
  );
}

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(destination)) {
  mkdirSync(destination, { recursive: true });
}

// Drop the joke into entry.txt exactly as written, with no newline after it.
writeFileSync(`${destination}/entry.txt`, DAD_JOKE, "utf8");

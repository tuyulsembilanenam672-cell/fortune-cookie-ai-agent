// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// The gate: UTF-8 text, 1-140 characters, not only whitespace, single line.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be retired with honors: a changelog nobody reads and a model card nobody opens.";

// Count Unicode code points (the gate counts characters, not bytes).
function codePoints(text: string): number {
  return [...text].length;
}

// The fortune must pass the gate on its own, before it is written out.
function validate(text: string): void {
  const n = codePoints(text);
  if (n < 1 || n > 140) {
    throw new Error(`fortune must be 1-140 characters, got ${n}`);
  }
  if (!text.trim()) {
    throw new Error("fortune must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
}

mkdirSync("/output", { recursive: true });
validate(FORTUNE);
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(`Wrote ${codePoints(FORTUNE)} code points to /output/entry.txt`);

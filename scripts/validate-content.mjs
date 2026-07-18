import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

const requiredCopy = [
  "notebooks/canonical/02-hyy-diphoton.ipynb",
  "current sampled baseline reports",
  "0.664 F1",
  "0.766 ROC AUC",
  "Random Forest",
];

const unsupportedCopy = [
  "0.76 weighted F1",
  "across <b>7.7M</b> accident records",
  "pdVsAk/HYY%20Skimmed%20via%20ak.ipynb",
  "Python · Gradient Boosting · scikit-learn · Plotly Dash",
];

for (const fragment of requiredCopy) {
  assert.ok(html.includes(fragment), `Missing verified portfolio copy: ${fragment}`);
}

for (const fragment of unsupportedCopy) {
  assert.ok(!html.includes(fragment), `Unsupported portfolio copy returned: ${fragment}`);
}

console.log("Portfolio content validation passed.");

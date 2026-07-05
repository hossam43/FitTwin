const fs = require("fs");

// Order matters: longer/more specific names first so short names
// (e.g. --accent) don't clobber long ones (e.g. --accent-glow2) first.

const map = [
  ["--acc-faint", "--color-accent-glow-2"],
  ["--acc-glow", "--color-accent-glow"],
  ["--easein", "--ease-in"],
  ["--acc2", "--color-accent-dim"],
  ["--glow", "--shadow-glow"],
  ["--gold", "--color-gold"],
  ["--ease", "--ease-out"],
  ["--nav", "--navbar-h"],
  ["--bg", "--color-bg"],
  ["--s1", "--color-surface"],
  ["--s2", "--color-surface-2"],
  ["--s3", "--color-surface-3"],
  ["--b1", "--color-border"],
  ["--b2", "--color-border-2"],
  ["--acc", "--color-accent"],
  ["--t1", "--color-text-primary"],
  ["--t2", "--color-text-secondary"],
  ["--t3", "--color-text-muted"],
  ["--fd", "--font-display"],
  ["--fb", "--font-body"],
  ["--tr", "--transition"],
  ["--teal", "--color-teal"],
  ["--blue", "--color-blue"],
  ["--t4", "--color-text-dark"],
  ["--glow2", "--shadow-glow-2"],
];

const file = process.argv[2] || "coaches.css";
let css = fs.readFileSync(file, "utf8");

for (const [oldName, newName] of map) {
  // \b won't match on -- boundaries reliably, so use negative lookaround instead
  const re = new RegExp(
    `(?<![\\w-])${oldName.replace(/-/g, "\\-")}(?![\\w-])`,
    "g",
  );
  css = css.replace(re, newName);
}

fs.writeFileSync(file, css, "utf8");
console.log(`Done. Renamed variables in ${file}`);

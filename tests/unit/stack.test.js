import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { stackGroups } from "../../src/data/stack.js";
import { stackAtlas } from "../../src/components/stack.js";
import { translate } from "../../src/data/strings.js";

test("stack atlas has three distinct, source-linked categories", () => {
  assert.deepEqual(
    stackGroups.map((group) => group.id),
    ["languages", "frameworks", "engines"],
  );
  const entries = stackGroups.flatMap((group) => group.items);
  assert.equal(new Set(entries.map((entry) => entry.id)).size, entries.length);
  for (const item of entries) {
    assert.match(item.source, /^https:\/\/github\.com\/Pierreg99\//);
    assert.ok(item.name && item.focus);
    assert.ok(translate(`stack.item.${item.id}.focus`, "de", "") !== "");
  }
});

test("stack source references remain public and the section works without JavaScript", () => {
  const html = stackAtlas();
  assert.equal((html.match(/<article class="stack-card">/g) || []).length, 3);
  assert.equal((html.match(/<li>/g) || []).length, 12);
  assert.ok(html.includes("React Three Fiber"));
  assert.ok(html.includes("TypeScript"));
  assert.ok(html.includes("Custom game systems"));
  assert.ok(!html.includes("CRYNEX-MCP-LAB"));
  assert.ok(!html.includes("CryexGameEngine"));
  assert.ok(html.includes('rel="noopener noreferrer"'));
});

test("all stack icons are local, labeled and linked in the redesigned README", async () => {
  const html = stackAtlas();
  const readme = await readFile(new URL("../../README.md", import.meta.url), "utf8");
  for (const item of stackGroups.flatMap((group) => group.items)) {
    const path = `assets/technology/${item.id}.svg`;
    const svg = await readFile(new URL(`../../${path}`, import.meta.url), "utf8");
    assert.ok(svg.includes("<title"));
    assert.ok(svg.includes("<desc"));
    assert.ok(svg.includes("viewBox"));
    assert.ok(html.includes(path));
    assert.ok(readme.includes(path));
  }
  assert.equal((html.match(/class="stack-technology-icon"/g) || []).length, 12);
});

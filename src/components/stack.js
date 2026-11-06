import { stackGroups } from "../data/stack.js";
import { t, escapeHtml } from "../lib/html.js";
import { icon } from "./icons.js";

function renderEntry(item) {
  return `<li>
    <a href="${escapeHtml(item.source)}" rel="noopener noreferrer">
      <span class="stack-entry">
        <strong>${escapeHtml(item.name)}</strong>
        <small>${t(`stack.item.${item.id}.focus`, item.focus)}</small>
      </span>
      <span class="stack-source">
        ${t("stack.source", "Code")}${icon("arrow")}
      </span>
    </a>
  </li>`;
}

function renderCard(group) {
  const entries = group.items.map(renderEntry).join("");
  return `<article class="stack-card">
    <div class="stack-topline">
      <span class="mono">${t(`stack.${group.id}.label`, group.label)}</span>
      <span class="stack-icon" aria-hidden="true">${icon(group.glyph)}</span>
    </div>
    <h3>${t(`stack.${group.id}.title`, group.title)}</h3>
    <p>${t(`stack.${group.id}.description`, group.description)}</p>
    <ul class="stack-list">${entries}</ul>
  </article>`;
}

export function stackAtlas() {
  return `<div class="stack-grid">${stackGroups.map(renderCard).join("")}</div>`;
}

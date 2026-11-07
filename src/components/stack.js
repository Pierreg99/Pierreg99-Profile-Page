import { stackGroups } from "../data/stack.js";
import { t, escapeHtml } from "../lib/html.js";
import { icon } from "./icons.js";
import { sectionHeading } from "./sections.js";

function renderEntry(item) {
  return `<li>
    <a href="${escapeHtml(item.source)}" rel="noopener noreferrer">
      <span class="stack-entry">
        <strong class="stack-technology-name">
          <img
            class="stack-technology-icon"
            src="./assets/technology/${escapeHtml(item.id)}.svg"
            width="34"
            height="34"
            loading="lazy"
            decoding="async"
            alt=""
          />
          <span>${escapeHtml(item.name)}</span>
        </strong>
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

export function stackSection() {
  const heading = sectionHeading(
    "03",
    "stack",
    "The tools behind the work.",
    "Programming languages, frameworks, and engines linked to public code — not skill scores.",
  );
  const note = t(
    "stack.note",
    "These examples link to public source files or dependency manifests. A listed dependency is not proof of a production release, usage depth, or expertise level.",
  );
  const docs = t("stack.docs", "Explore technical documentation");
  return `<section class="container section" id="stack">
    ${heading}
    ${stackAtlas()}
    <div class="stack-bottom">
      <p>${note}</p>
      <a class="text-link" href="./docs/index.html">
        ${docs}${icon("arrow")}
      </a>
    </div>
  </section>`;
}

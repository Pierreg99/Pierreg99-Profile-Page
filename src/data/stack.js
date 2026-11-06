// Curated public examples, not skill levels or live deployment checks.
const github = "https://github.com/Pierreg99/";
const manifest = (repo) => `${github}${repo}/blob/main/package.json`;
const profileRoot = `${github}Pierreg99-Profile-Page/blob/main/`;
const profile = (file) => `${profileRoot}${file}`;

const groky = manifest("call-of-groky");
const nexo = manifest("Nexo-Jarvis-AI-Futuristic-Assistant-Alpha");
const cryoplane = manifest("Cryoplane-Polygonal-Flight");
const cyberdash = `${github}Cyberdash-Rhythm-Platformer-GAME`;
const profileJavaScript = profile("src/pages/home.js");
const profilePython = profile("scripts/sync_profile_assets.py");
const profileCss = profile("src/styles/index.css");

export const stackGroups = [
  {
    id: "languages",
    label: "01 / LANGUAGES",
    title: "Programming languages",
    description: "Languages in selected public projects and scripts.",
    glyph: "code",
    items: [
      {
        id: "typescript",
        name: "TypeScript",
        focus: "Typed browser games",
        source: groky,
      },
      {
        id: "javascript",
        name: "JavaScript",
        focus: "Interactive web interfaces",
        source: profileJavaScript,
      },
      {
        id: "python",
        name: "Python",
        focus: "Repository automation",
        source: profilePython,
      },
      {
        id: "htmlcss",
        name: "HTML / CSS",
        focus: "Semantic pages and responsive styling",
        source: profileCss,
      },
    ],
  },
  {
    id: "frameworks",
    label: "02 / FRAMEWORKS",
    title: "Frameworks & tooling",
    description: "Libraries and runtimes declared by selected public projects.",
    glyph: "layers",
    items: [
      {
        id: "react",
        name: "React",
        focus: "Component-based interfaces",
        source: nexo,
      },
      {
        id: "vite",
        name: "Vite",
        focus: "Frontend build workflow",
        source: groky,
      },
      {
        id: "express",
        name: "Express",
        focus: "Node.js services",
        source: nexo,
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        focus: "Utility-first styling",
        source: cryoplane,
      },
    ],
  },
  {
    id: "engines",
    label: "03 / ENGINES & 3D",
    title: "Engines & interactive 3D",
    description: "Graphics, physics, and custom browser-game systems in public work.",
    glyph: "cube",
    items: [
      {
        id: "three",
        name: "Three.js",
        focus: "Browser-based 3D scenes",
        source: groky,
      },
      {
        id: "r3f",
        name: "React Three Fiber",
        focus: "React-driven 3D rendering",
        source: nexo,
      },
      {
        id: "cannon",
        name: "Cannon-es",
        focus: "3D physics integration",
        source: groky,
      },
      {
        id: "custom",
        name: "Custom game systems",
        focus: "Rhythm gameplay and level editing",
        source: cyberdash,
      },
    ],
  },
];

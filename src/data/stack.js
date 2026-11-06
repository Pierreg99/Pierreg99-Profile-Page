// Curated, source-linked examples. These are not skill levels or live dependency checks.
const github = "https://github.com/Pierreg99/";

export const stackGroups = [
  {
    id: "languages",
    label: "01 / LANGUAGES",
    title: "Programming languages",
    description:
      "Languages used across publicly inspectable projects and scripts.",
    glyph: "code",
    items: [
      {
        id: "typescript",
        name: "TypeScript",
        focus: "Typed browser games",
        source: `${github}call-of-groky/blob/main/package.json`,
      },
      {
        id: "javascript",
        name: "JavaScript",
        focus: "Interactive web interfaces",
        source: `${github}Pierreg99-Profile-Page/blob/main/src/pages/home.js`,
      },
      {
        id: "python",
        name: "Python",
        focus: "Repository automation",
        source: `${github}Pierreg99-Profile-Page/blob/main/scripts/sync_profile_assets.py`,
      },
      {
        id: "htmlcss",
        name: "HTML / CSS",
        focus: "Semantic pages and responsive styling",
        source: `${github}Pierreg99-Profile-Page/blob/main/src/styles/index.css`,
      },
    ],
  },
  {
    id: "frameworks",
    label: "02 / FRAMEWORKS",
    title: "Frameworks & tooling",
    description: "Libraries and runtimes declared by selected public codebases.",
    glyph: "layers",
    items: [
      {
        id: "react",
        name: "React",
        focus: "Component-based interfaces",
        source: `${github}Nexo-Jarvis-AI-Futuristic-Assistant-Alpha/blob/main/package.json`,
      },
      {
        id: "vite",
        name: "Vite",
        focus: "Frontend build workflow",
        source: `${github}call-of-groky/blob/main/package.json`,
      },
      {
        id: "express",
        name: "Express",
        focus: "Node.js services",
        source: `${github}Nexo-Jarvis-AI-Futuristic-Assistant-Alpha/blob/main/package.json`,
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        focus: "Utility-first styling",
        source: `${github}Cryoplane-Polygonal-Flight/blob/main/package.json`,
      },
    ],
  },
  {
    id: "engines",
    label: "03 / ENGINES & 3D",
    title: "Engines & interactive 3D",
    description:
      "Graphics, physics, and bespoke game systems represented in public work.",
    glyph: "cube",
    items: [
      {
        id: "three",
        name: "Three.js",
        focus: "Browser-based 3D scenes",
        source: `${github}call-of-groky/blob/main/package.json`,
      },
      {
        id: "r3f",
        name: "React Three Fiber",
        focus: "React-driven 3D rendering",
        source: `${github}Nexo-Jarvis-AI-Futuristic-Assistant-Alpha/blob/main/package.json`,
      },
      {
        id: "cannon",
        name: "Cannon-es",
        focus: "3D physics integration",
        source: `${github}call-of-groky/blob/main/package.json`,
      },
      {
        id: "custom",
        name: "Custom game systems",
        focus: "Rhythm gameplay and level editing",
        source: `${github}Cyberdash-Rhythm-Platformer-GAME`,
      },
    ],
  },
];

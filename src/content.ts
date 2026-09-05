export const site = {
  name: "Your Name",
  role: "Software Engineer · Artist",           // kicker
  headline: "Software Engineer & Digital Artist", // H1 (title case)
  sub: "Software engineer by trade, artist at heart. I turn ideas into web applications people actually enjoy using.",
  status: "Frontend-focused, heading full-stack · Philadelphia, PA · Available for freelance",
  email: "you@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/you" },
    { label: "LinkedIn", href: "https://linkedin.com/in/you" },
  ],
  resumeUrl: "/resume.pdf",
  // optional: art for the arch. Leave null to keep a solid color arch.
  archImage: null, // e.g. "/art/piece.jpg"
};

export const projects = [
  {
    slug: "project-one",
    title: "Project One",
    blurb: "One line: the problem and what you shipped.",
    role: "Design + build",
    outcome: "Cut load time 40% / launched in 3 weeks",
    tech: ["React", "Vite", "TypeScript"],
    image: "/work/project-one.png",
    live: "https://example.com",
    code: "https://github.com/you/project-one",
  },
  // 2–4 more, best first.
];

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { label: "Frameworks", items: ["React", "Vite", "Node"] },
  { label: "Tooling", items: ["Git", "Vitest", "Figma"] },
];

export const experience = [
  {
    company: "Company", title: "Frontend Engineer", dates: "2024 — Present",
    impact: "One quantified outcome per role."
  },
];

export const testimonials = [
  // { quote: "One vivid sentence.", name: "Client Name", title: "Role, Company", avatar: "/people/client.jpg" },
];

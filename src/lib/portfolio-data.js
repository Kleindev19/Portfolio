// ---------------------------------------------------------------------------
// Single source of truth for the portfolio content.
// Placeholders are marked: swap in your real URLs / details when you have them.
// ---------------------------------------------------------------------------

export const PROFILE = {
  name: "Marvhenne Klein Ortega",
  shortName: "Klein",
  mark: "M. Klein Ortega",
  role: "Aspiring Full-Stack Web Developer",
  headline: "Building Digital Experiences Through Code.",
  intro:
    "I'm a BSIT student from Colegio de Montalban with a passion for building full-stack web applications using the MERN stack. I work across the development process, from designing database structures and building backend APIs with Node.js and Express to creating responsive, user-focused interfaces with React. I value clean code, thoughtful problem-solving, and building practical software that addresses real-world needs.",
  location: "Montalban, Rizal — Philippines",
  availability: "Open to internships & junior roles",
  email: "ortegamarvhenneklein@gmail.com", // placeholder — replace with your email
  github: "https://github.com/", // placeholder — replace with your GitHub profile
  linkedin: "https://www.linkedin.com/", // placeholder — replace with your LinkedIn profile
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_FACTS = [
  { label: "Focus", value: "Full-stack web development" },
  { label: "Studying", value: "BS Information Technology" },
  { label: "School", value: "Colegio de Montalban" },
  { label: "Graduating", value: "July 2027 (expected)" },
];

export const SKILL_GROUPS = [
  {
    key: "frontend",
    label: "Frontend",
    note: "Interfaces that stay fast and predictable",
    items: [
      { name: "Vue.js", abbr: "Vu" },
       { name: "React", abbr: "Re" },
      { name: "JavaScript", abbr: "JS" },
      { name: "HTML", abbr: "H5" },
      { name: "CSS", abbr: "C3" },
      { name: "Bootstrap", abbr: "Bt" },
      { name: "Tailwind CSS", abbr: "Tw" },
     
    ],
  },
  {
    key: "backend",
    label: "Backend",
    note: "APIs, validation and business logic",
    items: [
      { name: "PHP", abbr: "PHP" },
      { name: "Laravel", abbr: "Lv" },
      { name: "Node.js", abbr: "No" },
      { name: "Express.js", abbr: "Ex" },
      { name: "MongoDB", abbr: "Mo" },
      { name: "REST APIs", abbr: "API" },
    ],
  },
  {
    key: "database",
    label: "Database",
    note: "Schemas that hold up as data grows",
    items: [
      { name: "MySQL", abbr: "My" },
      { name: "SQLite", abbr: "Sq" },
      { name: "PostgreSQL", abbr: "Pg" },
      { name: "Supabase", abbr: "Sb" },
    ],
  },
  {
    key: "tools",
    label: "Development Tools",
    note: "Everyday workflow and collaboration",
    items: [
      { name: "Git", abbr: "Git" },
      { name: "GitHub", abbr: "GH" },
      { name: "Postman", abbr: "Pm" },
      { name: "Docker", abbr: "Dk" },
    ],
  },
  {
    key: "deployment",
    label: "Deployment",
    note: "Getting work from local to live",
    items: [
      { name: "Vercel", abbr: "Vc" },
      { name: "Render", abbr: "Rd" },
    ],
  },
];

export const PROJECTS = [
  {
    index: "01",
    name: "Grading Management System",
    tagline: "Academic records, handled properly",
    description:
      "A full-stack academic grading platform for faculty and administrators. It centralises student records, grade encoding and weighted grade computation so results are consistent, traceable and quick to release.",
    image: "https://media.base44.com/images/public/6ae5d5d4ee229b89b280af93/3fc08a176_generated_6caaaeb0.png",
    stack: ["Laravel", "Vue.js", "MySQL", "REST API"],
    features: [
      "Student, class and subject records in one place",
      "Weighted grade computation with automatic final ratings",
      "Role-based access for faculty and administrators",
      "Printable class records and grade summaries",
    ],
    demoUrl: "", // placeholder — paste the live demo URL when deployed
    repoUrl: "", // placeholder — paste the repository URL
  },
  {
    index: "02",
    name: "AI-Powered Exam Reviewer",
    tagline: "Lecture notes into practice tests",
    description:
      "A web application concept that turns lecture material into interactive reviewers. Uploaded notes are summarised into question sets with instant scoring, so students can revise with active recall instead of re-reading.",
    image: "https://media.base44.com/images/public/6ae5d5d4ee229b89b280af93/f3968eff8_generated_d5c08220.png",
    stack: ["Vue.js", "Laravel", "MySQL", "AI API"],
    features: [
      "Notes upload and topic extraction",
      "Auto-generated multiple-choice and identification items",
      "Timed review sessions with instant feedback",
      "Progress tracking across subjects",
    ],
    demoUrl: "", // placeholder
    repoUrl: "", // placeholder
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Information Technology",
  school: "Colegio de Montalban",
  period: "2023 — July 2027 (expected)",
  status: "In progress",
  summary:
    "My program covers the foundations I use every day: programming, database design, systems analysis and networking. Coursework is where most of my project work starts — I usually take an assignment further than the brief requires and turn it into a working application.",
  highlights: [
    "Systems analysis and design — documenting requirements before writing code",
    "Database management — normalisation, relationships and query design",
    "Web systems and technologies — building and deploying full-stack projects",
    "Networking fundamentals — supported by Cisco Networking Academy coursework",
  ],
  coursework: [
    "Data Structures",
    "Database Management",
    "Web Systems",
    "Software Engineering",
    "Networking",
    "Systems Analysis",
  ],
};

export const CERTIFICATIONS = [
  {
    name: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    issued: "Issue date placeholder", // replace with your actual issue date
    credentialUrl: "https://www.credly.com/badges/1867d511-cb56-4ed7-b9b0-9684b4d642cb", // placeholder — paste your Credly / certificate link
    skills: ["Linux CLI", "File Systems", "Permissions", "Shell Basics"],
  },
];

export const PHILOSOPHY = [
  {
    index: "01",
    title: "Write for the next reader",
    body: "Code is read far more often than it's written. I favour clear names, small functions and predictable structure, so the next person — future me included — can follow the intent without a walkthrough.",
  },
  {
    index: "02",
    title: "Understand the system first",
    body: "Before touching a screen, I map the data: what a record is, who owns it, and how it moves between the database and the interface. Most bugs I've met were really unresolved design questions.",
  },
  {
    index: "03",
    title: "Debug methodically",
    body: "Reproduce, isolate, verify. I read the error before changing anything, check the layer where it actually happens, then confirm the fix rather than assuming it worked.",
  },
  {
    index: "04",
    title: "Improve in small increments",
    body: "I ship something working, then refine it. Each project teaches a lesson the next one benefits from — that loop is the only reason I've gotten faster.",
  },
];

export const HERO_IMAGE =
  "https://media.base44.com/images/public/6ae5d5d4ee229b89b280af93/4adbbd543_generated_ed8e692a.png";
export const DESK_IMAGE =
  "https://media.base44.com/images/public/6ae5d5d4ee229b89b280af93/471e4aca4_generated_e361ee6a.png";
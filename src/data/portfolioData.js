import nursingImg from "../assets/projects/nursing_bot.png";
import domiImg from "../assets/projects/domi_saas.png";
import inventoryImg from "../assets/projects/inventory.png";

export const NAV_LINKS = [
  { labelKey: "nav.root", href: "#hero", active: true },
  { labelKey: "nav.src", href: "#competencies", active: false },
  { labelKey: "nav.tests", href: "#projects", active: false },
  { labelKey: "nav.logs", href: "#contact", active: false },
];

export const SIDEBAR_LINKS = [
  { labelKey: "nav.root", icon: "folder_open", href: "#hero" },
  { labelKey: "nav.src", icon: "code", href: "#competencies" },
  { labelKey: "nav.tests", icon: "biotech", href: "#projects" },
  { labelKey: "nav.logs", icon: "history_edu", href: "#contact" },
];

export const COMPETENCIES = [
  {
    title: "React.js",
    categoryKey: "competencies.categories.interface",
    icon: "hub",
    index: "01",
  },
  {
    title: "Next.js",
    categoryKey: "competencies.categories.framework",
    icon: "speed",
    index: "02",
  },
  {
    title: "Node.js",
    categoryKey: "competencies.categories.runtime",
    icon: "cloud",
    index: "03",
  },
  {
    title: "TypeScript",
    categoryKey: "competencies.categories.typing",
    icon: "code",
    index: "04",
  },
  {
    title: "SQL",
    categoryKey: "competencies.categories.database",
    icon: "database",
    index: "05",
  },
  {
    title: "Supabase",
    categoryKey: "competencies.categories.backend",
    icon: "bolt",
    index: "06",
  },
  {
    title: "Playwright",
    categoryKey: "competencies.categories.testing",
    icon: "terminal",
    index: "07",
  },
  {
    title: "Git",
    categoryKey: "competencies.categories.vcs",
    icon: "history",
    index: "08",
  },
];

export const PROJECTS = [
  {
    index: "0X01",
    titleKey: "projects.bot.title",
    descKey: "projects.bot.desc",
    categoryKey: "projects.categories.fullstack",
    statusKey: "projects.status.active",
    image: nursingImg,
    tags: ["REACT", "SUPABASE", "NODE.JS", "OPENAI"],
  },
  {
    index: "0X02",
    titleKey: "projects.domi.title",
    descKey: "projects.domi.desc",
    categoryKey: "projects.categories.saas",
    statusKey: "projects.status.deployed",
    image: domiImg,
    tags: ["NEXT.JS", "POSTGRESQL", "PRISMA", "MAPS API"],
  },
  {
    index: "0X03",
    titleKey: "projects.erp.title",
    descKey: "projects.erp.desc",
    categoryKey: "projects.categories.enterprise",
    statusKey: "projects.status.in_progress",
    image: inventoryImg,
    tags: ["VUE3", "MYSQL", "EXPRESS", "SCALABLE"],
  },
];

export const CODE_SNIPPET = [
  { line: "01", content: 'const', rest: ' { data, error } = await supabase', highlight: "purple" },
  { line: "02", content: '  .from', rest: "('reservations').insert([{ status: 'active' }])", highlight: "cyan" },
  { line: "03", content: 'if', rest: ' (error) throw new ScalabilityError(error.message)', highlight: "purple" },
  { line: "04", content: 'return', rest: ' data.map(r => optimizeFlow(r))', highlight: "default" },
];

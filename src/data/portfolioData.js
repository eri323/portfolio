import nursingImg from "../assets/projects/nursing_bot.png";
import domiImg from "../assets/projects/domi_saas.png";
import inventoryImg from "../assets/projects/inventory.png";

export const NAV_LINKS = [
  { labelKey: "nav.root", href: "#hero", active: true },
  { labelKey: "nav.about", href: "#about", active: false },
  { labelKey: "nav.services", href: "#services", active: false },
  { labelKey: "nav.src", href: "#competencies", active: false },
  { labelKey: "nav.tests", href: "#projects", active: false },
  { labelKey: "nav.logs", href: "#contact", active: false },
];

export const SERVICES = [
  {
    index: "01",
    icon: "code_blocks",
    titleKey: "services.dev.title",
    descKey: "services.dev.desc",
    bullets: [
      "services.dev.bullets.0",
      "services.dev.bullets.1",
      "services.dev.bullets.2",
      "services.dev.bullets.3",
    ],
  },
  {
    index: "02",
    icon: "smart_toy",
    titleKey: "services.qa.title",
    descKey: "services.qa.desc",
    bullets: [
      "services.qa.bullets.0",
      "services.qa.bullets.1",
      "services.qa.bullets.2",
      "services.qa.bullets.3",
    ],
  },
  {
    index: "03",
    icon: "account_balance",
    titleKey: "services.banking.title",
    descKey: "services.banking.desc",
    bullets: [
      "services.banking.bullets.0",
      "services.banking.bullets.1",
      "services.banking.bullets.2",
      "services.banking.bullets.3",
    ],
  },
];

export const DEV_STACK = [
  { title: "React.js", categoryKey: "competencies.categories.interface", icon: "hub", index: "01" },
  { title: "Next.js", categoryKey: "competencies.categories.framework", icon: "speed", index: "02" },
  { title: "Node.js", categoryKey: "competencies.categories.runtime", icon: "cloud", index: "03" },
  { title: "TypeScript", categoryKey: "competencies.categories.typing", icon: "code", index: "04" },
  { title: "SQL / Oracle", categoryKey: "competencies.categories.database", icon: "database", index: "05" },
  { title: "Supabase", categoryKey: "competencies.categories.backend", icon: "bolt", index: "06" },
  { title: "Vue 3", categoryKey: "competencies.categories.framework", icon: "widgets", index: "07" },
  { title: "Git", categoryKey: "competencies.categories.vcs", icon: "history", index: "08" },
];

export const QA_STACK = [
  { title: "QA Manual", categoryKey: "competencies.categories.qaManual", icon: "fact_check", index: "01" },
  { title: "Serenity BDD", categoryKey: "competencies.categories.qaAutomation", icon: "smart_toy", index: "02" },
  { title: "Cucumber", categoryKey: "competencies.categories.bdd", icon: "menu_book", index: "03" },
  { title: "Screenplay", categoryKey: "competencies.categories.pattern", icon: "theater_comedy", index: "04" },
  { title: "Playwright", categoryKey: "competencies.categories.e2e", icon: "terminal", index: "05" },
  { title: "Postman", categoryKey: "competencies.categories.api", icon: "api", index: "06" },
  { title: "SoapUI", categoryKey: "competencies.categories.api", icon: "settings_input_component", index: "07" },
  { title: "ISO 8583 / BASE24", categoryKey: "competencies.categories.banking", icon: "account_balance", index: "08" },
  { title: "Oracle DB", categoryKey: "competencies.categories.database", icon: "storage", index: "09" },
  { title: "Jira", categoryKey: "competencies.categories.tracking", icon: "task_alt", index: "10" },
];

export const PROJECTS = [
  {
    index: "0X01",
    titleKey: "projects.bot.title",
    descKey: "projects.bot.desc",
    qaNoteKey: "projects.bot.qaNote",
    categoryKey: "projects.categories.fullstack",
    statusKey: "projects.status.deployed",
    image: nursingImg,
    tags: ["REACT", "SUPABASE", "NODE.JS", "OPENAI"],
    demoUrl: "https://chatbot-enfermeria.vercel.app/",
    repoUrl: "https://github.com/eri323",
  },
  {
    index: "0X02",
    titleKey: "projects.domi.title",
    descKey: "projects.domi.desc",
    qaNoteKey: "projects.domi.qaNote",
    categoryKey: "projects.categories.saas",
    statusKey: "projects.status.in_progress",
    image: domiImg,
    tags: ["NEXT.JS", "POSTGRESQL", "PRISMA", "MAPS API"],
  },
  {
    index: "0X03",
    titleKey: "projects.erp.title",
    descKey: "projects.erp.desc",
    qaNoteKey: "projects.erp.qaNote",
    categoryKey: "projects.categories.enterprise",
    statusKey: "projects.status.in_progress",
    image: inventoryImg,
    tags: ["VUE3", "MYSQL", "EXPRESS", "SCALABLE"],
  },
];

export const ABOUT_STATS = [
  {
    value: 2,
    suffixKey: "about.stats.dev.suffix",
    descKey: "about.stats.dev.desc",
    animate: true,
  },
  {
    value: 200,
    suffixKey: "about.stats.qa.suffix",
    descKey: "about.stats.qa.desc",
    animate: true,
  },
  {
    valueKey: "about.stats.banking.value",
    suffixKey: "about.stats.banking.suffix",
    descKey: "about.stats.banking.desc",
    animate: false,
  },
];

export const CODE_SNIPPET = [
  { line: "01", content: 'test', rest: "('reserva activa', async () => {", highlight: "purple" },
  { line: "02", content: '  const', rest: ' booking = await createBooking()', highlight: "cyan" },
  { line: "03", content: '  expect', rest: '(booking.status).toBe("active")', highlight: "purple" },
  { line: "04", content: '})', rest: " // build it. test it. ship it.", highlight: "default" },
];


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
    titleKey: "competencies.autoTesting.title",
    descKey: "competencies.autoTesting.desc",
    icon: "account_balance",
    tags: ["JAVA", "SERENITY BDD", "SCREENPLAY"],
    span: "md:col-span-8",
  },
  {
    titleKey: "competencies.bankingCore.title",
    descKey: "competencies.bankingCore.desc",
    icon: "credit_card",
    tags: ["POSTILION", "ISO 8583", "BASE24"],
    span: "md:col-span-4",
  },
  {
    titleKey: "competencies.apiTesting.title",
    descKey: "competencies.apiTesting.desc",
    icon: "api",
    tags: ["SOAPUI", "POSTMAN"],
    span: "md:col-span-5",
    hasProgressBar: true,
  },
  {
    titleKey: "competencies.fullstack.title",
    descKey: "competencies.fullstack.desc",
    icon: "code_blocks",
    tags: ["REACT", "VUE3", "NODE", "POSTGRESQL"],
    span: "md:col-span-7",
    decorativeIcon: "database",
  },
];

export const PROJECTS = [
  {
    index: "01",
    titleKey: "projects.bot.title",
    descKey: "projects.bot.desc",
    tags: ["JAVA", "SERENITY", "QA BANCARIO"],
  },
  {
    index: "02",
    titleKey: "projects.testSuite.title",
    descKey: "projects.testSuite.desc",
    tags: ["ISO 8583", "POSTILION", "POSTMAN"],
  },
  {
    index: "03",
    titleKey: "projects.portfolio.title",
    descKey: "projects.portfolio.desc",
    tags: ["REACT", "NODE.JS", "MONGODB"],
  },
];

export const CODE_SNIPPET = [
  { line: "01", content: 'it', rest: "('should validate end-to-end flow', () => {", highlight: "cyan" },
  { line: "02", content: 'const', rest: ' system = await Deploy.main();', highlight: "purple" },
  { line: "03", content: 'expect', rest: '(system.reliability).toBeGreaterThan(99.9);', highlight: "cyan" },
  { line: "04", content: '});', rest: '', highlight: "default" },
];

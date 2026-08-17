/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.myloandesk.com",
  generateRobotsTxt: true,
  outDir: "out", // Points to Next.js static output folder
  exclude: ["/icon.jpeg"],
};

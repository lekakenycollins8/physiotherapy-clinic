/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.motionworksphysioclinic.com/', 
  generateRobotsTxt: true, // Automatically generates a robots.txt file
  sitemapSize: 5000,        // (Optional) Split large sitemaps if needed
  exclude: ["/admin", "/dashboard"], // Exclude pages you don't want in the sitemap
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
};
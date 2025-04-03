module.exports = {
    siteUrl: 'https://nexgen-consulting.de',
    generateRobotsTxt: true, // erstellt automatisch robots.txt
    generateIndexSitemap: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    outDir: 'public', // wichtig, damit `sitemap.xml` & `robots.txt` direkt im Build-Ordner landen
  };
  
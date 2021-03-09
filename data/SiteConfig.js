const config = {
  // Site info
  siteTitle:
    "UpdateCoinNews - อัพเดทคอยนิวส์ อัพเดททุกตวามเคลื่อนไหวในโลกคริบโต", // Site title.
  siteTitleShort: "UpdateCoinNews.com", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt:
    "UpdateCoinNews - อัพเดทคอยนิวส์ อัพเดททุกตวามเคลื่อนไหวในโลกคริบโต", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://updatecoinnews.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "อัพเดทคอยนิวส์ อัพเดททุกตวามเคลื่อนไหวในโลกคริบโต", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "th",
  siteFBAppID: "2198345126924491", // FB Application ID for using app insights
  googleAnalyticsID: "UA-102504140-1", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "เผยแพร่เมื่อ",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "updatecoinnew", // Disqus shortname.
  btnLoadComments: "โหลดคอมเม้น",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "โหลดเพิ่ม",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "หน้าบ้าน",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "ไม่พบหน้าที่คุณค้นหา", //
  pageNotFoundBtn: "กลับไปยังหน้าแรก",
  pageNotFoundContent:
    "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template pagea
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/หมวดหมู่", // Prefix path for category
  categoryHeader: "บทความในหมวดหมู่", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "คุณอยากรู้เรื่องอะไร?",
  searchWidgetPlaceHolder: "ค้นหา",
  searchEngineID: "005328897267550362033:gui3_qqia8k",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,

  // Use for user info
  userName: "Krissanawat", // Username to display in the author segment.
  userEmail: "kris@updatecoinnews.com", // Email used for RSS feed"s author segment
  userTwitter: "krissanawat101", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Chiangmai, Thailand", // User location to display in the author segment.
  userAvatar:
    "https://en.gravatar.com/userimage/155811895/09834b18c86688d77a606ab08b38cec3.png?s=300", // User avatar to display in the author segment.
  userDescription: "Solidity Develiper,Crypto Lover & Blogger.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:me@kriss.io",
      iconClassName: "far envelope",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/krissanawat101",
      iconClassName: "fab twitter",
    },
  ],
  // Use for navigation
  navTitle: "UpdateCoinNews",
  navLinks: [
    { label: "เกี่ยวกับ", url: "/about" },
    { label: "ติดต่อ", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/krisnawat",
      iconClassName: "fab github",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/updatecoinnews/",
      iconClassName: "fab facebook-f",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/krissanawat101",
      iconClassName: "fab twitter",
    },
    {
      label: "RSS",
      url: "https://updatecoinnews.com/rss.xml",
      iconClassName: "fas rss",
    },
  ],
  footerLinks: [
    { label: "", url: "/" },
    { label: "เกี่ยวกับ", url: "/about" },
    { label: "ติดต่อ", url: "/contact" },
    { label: "ข้อตกลงในการใช้งาน", url: "/terms" },
    { label: "ข้อตกลงความเป็นส่วนตัว", url: "/privacy" },
    { label: "Sitemap", url: "https://updatecoinnews.com/sitemap.xml" },
  ],
  copyright:
    "Copyright © 2019-2020 ๊pdatecoinnews. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

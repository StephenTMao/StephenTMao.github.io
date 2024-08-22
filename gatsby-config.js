/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    reactStrictMode: false,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Todo - DevCave",
  titleTemplate: "%s | Todo - DevCave",
  defaultTitle: "Todo - DevCave",
  description: "Todo - DevCave todo app",
  canonical: "https://todo.devcave.xyz/",
  openGraph: {
    url: "https://todo.devcave.xyz/",
    title: "Todo - DevCave",
    description: "Todo - DevCave todo app",
    images: [
      {
        url: "https://todo.devcave.xyz/devcave.svg",
        alt: "Todo - DevCave todo app",
      },
    ],
    site_name: "Todo - DevCave",
  },
};

export default defaultSEOConfig;

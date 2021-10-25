/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Todo - DevCave",
  titleTemplate: "%s | Todo - DevCave",
  defaultTitle: "Todo - DevCave",
  description: "Todo - DevCave todo app",
  canonical: "https://nextarter-chakra.sznm.dev",
  openGraph: {
    url: "https://nextarter-chakra.sznm.dev",
    title: "Todo - DevCave",
    description: "\"Todo - DevCave todo app\"",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "Todo - DevCave",
  },
};

export default defaultSEOConfig;

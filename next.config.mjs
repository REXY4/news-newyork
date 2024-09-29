/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
        buildActivity: false
  },
  swcMinify: true,
  reactStrictMode: true,
    publicRuntimeConfig : {
        apiKey : "lI4H59UgkPIU3DCycGhXViuGufG5aYos",
        nytArticleURL : "https://api.nytimes.com/svc/search/v2/articlesearch.json"
    },
    
};

export default nextConfig;

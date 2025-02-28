import { Box } from "@mui/material";
import SelectCard from "../components/shared/SelectCard";
import SEO from "../components/SEO";

const Home = ({mode}) => {
  return (
    <>
      <SEO 
        title="The Chronicle - Latest News from Multiple Sources | Free News App"
        description="Get the latest news from multiple sources including GNews, TheNewsAPI, and NewsAPI. Free news aggregator with dark/light themes, search functionality, and real-time updates. Stay informed with breaking news, technology, business, sports, and more."
        keywords="news, latest news, breaking news, free news, news aggregator, GNews, TheNewsAPI, NewsAPI, technology news, business news, sports news, world news, India news, real-time news, news app, chronicle news"
        url="https://chronicle-news.vercel.app/"
      />
      <Box
        className="items-center justify-evenly"
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: "row"},
          bgcolor: "background",
          minHeight: "90vh",
        }}
      >
        {/* <SelectCard name={"News API"} logo={"/news/NewsAPI-ORG.png"} url={"/newsapi"}/> */}
        <SelectCard name={"The News API"} logo = {mode==="light"?"/news/TheNewsapi-logo.png":"/news/TheNewsapi-logo-dark.png"} url = {"/thenewsapi"} />
        <SelectCard name={"GNews"} logo = {mode==="light"?"/news/Gnews-logo-black.png":"/news/Gnews-logo-white.png"} url={"/gnews"}/>
      </Box>
    </>
  );
};

export default Home;

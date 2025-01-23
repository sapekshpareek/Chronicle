import { Box } from "@mui/material";
import newsData from "../../sample";
import NewsCard from "../components/shared/NewsCard";

const NewsApi = () => {
  return (
    <Box sx={{
      height: '90vh',
      overflow: 'auto',
      bgcolor: 'background'
    }}>
      {
        newsData.map(news=>{
          return(
            <NewsCard title={news.title} description={news.description} imgUrl={news.urlToImage} author={news.author} url={news.url} key={news.url}/>
          )
          console.log(news);
        })
      }
    </Box>
  );
};

export default NewsApi;

import { Box } from "@mui/material";
import SelectCard from "../components/shared/SelectCard";

const Home = ({mode}) => {
  return (
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
  );
};

export default Home;

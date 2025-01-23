import { Box } from "@mui/material";
import SelectCard from "../components/shared/SelectCard";

const Home = () => {
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
      <SelectCard name={"News API"} logo={"/news/NewsAPI-ORG.png"} url={"/newsapi"}/>
      <SelectCard name={"The News API"} logo = {"/news/TheNewsapi-logo.png"} url = {"/thenewsapi"} />
      <SelectCard name={"GNews"} logo = { "/news/Gnews-logo-white.png"} url={"/gnews"}/>
    </Box>
  );
};

export default Home;

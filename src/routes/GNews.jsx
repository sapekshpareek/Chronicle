import { Box, Card, CardContent, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Filters from "../components/shared/Filters";
import NewsCard from "../components/shared/NewsCard";
import SEO from "../components/SEO";

const GNews = ({ api, mode, setMode }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState(() => localStorage.getItem('newsCategory') || "general");
  const [language, setLanguage] = useState(() => localStorage.getItem('newsLanguage') || "en");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const endpoint = searchQuery
          ? `https://gnews.io/api/v4/search?q=${searchQuery}&lang=${language}&country=in&max=10&apikey=${api}`
          : `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=in&max=10&apikey=${api}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.errors || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        setItems(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [api, searchQuery, category, language]);

  return (
    <>
      <SEO 
        title={`${category.charAt(0).toUpperCase() + category.slice(1)} News - GNews | The Chronicle`}
        description={`Get the latest ${category} news from GNews. Real-time updates on ${category} topics with search functionality and multiple language support. Stay informed with The Chronicle.`}
        keywords={`${category} news, GNews, latest ${category} news, breaking ${category} news, real-time news, ${language === 'hi' ? 'Hindi news' : 'English news'}`}
        url="https://chronicle-news.vercel.app/gnews"
      />
      <Box
        sx={{
          minHeight: "90vh",
          bgcolor: "surface",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* News Content */}
        <Box sx={{ 
          flex: 1, 
          overflow: "auto", 
          px: { xs: 0.5, sm: 1, md: 2, lg: 3 },
          pb: { xs: 1, sm: 2 }
        }}>
          {error ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh",
                px: 2,
              }}
            >
              <Typography
                variant="h4"
                color="error"
                sx={{ textAlign: "center", mb: 2 }}
              >
                Error
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ textAlign: "center" }}>
                {error}
              </Typography>
            </Box>
          ) : loading ? (
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
              {Array.from(new Array(5)).map((_, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      m: { xs: 0.5, sm: 1, md: 2 },
                      borderRadius: "2vh",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardMedia>
                      <Skeleton
                        variant="rectangular"
                        height={200}
                      />
                    </CardMedia>
                    <CardContent>
                      <Box sx={{display: "flex", justifyContent: "space-between"}}>

                      <Skeleton variant="text" height={8} sx={{ mb: 2, width: "20%" }}/>
                      <Skeleton variant="text" height={8} sx={{ mb: 2, width: "20%" }}/>
                      </Box>
                      <Skeleton variant="text" height={40} />
                      <Skeleton variant="text" height={40} />
                      <Skeleton variant="text" height={40} sx={{ mb: 2 }}/>
                      <Skeleton variant="text" height={15} />
                      <Skeleton variant="text" height={15} />
                      <Skeleton variant="text" height={15} />
                      <Skeleton variant="text" height={15} />
                      <Skeleton variant="text" height={15} />
                      <Skeleton variant="text" height={15} />
                      <Skeleton variant="text" height={15} />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : items.length > 0 ? (
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
              {items.map((item) => (
                <Grid item key={item.url} xs={12} sm={6} md={4} lg={3}>
                  <NewsCard
                    title={item.title}
                    description={item.description}
                    imgUrl={item.image || "/news/Gnews-logo-black.png"}
                    url={item.url}
                    dateTime={item.publishedAt}
                    author={item.source.name}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh",
                px: 2,
              }}
            >
              <Typography variant="h6">No News Available</Typography>
            </Box>
          )}
        </Box>
        
        {/* Filters positioned at bottom */}
        <Box sx={{ 
          flexShrink: 0,
          width: "100%",
          boxSizing: "border-box"
        }}>
          <Filters 
            onSearch={setSearchQuery} 
            onCategoryChange={setCategory} 
            onLanguageChange={setLanguage}
            mode={mode}
            setMode={setMode}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default GNews;

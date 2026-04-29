import { Box, Card, CardContent, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Filters from "../components/shared/Filters";
import NewsCard from "../components/shared/NewsCard";
import SEO from "../components/SEO";

const RSS_FEEDS = {
  general: "https://www.hindustantimes.com/feeds/rss/latest/rssfeed.xml",
  world: "https://www.hindustantimes.com/feeds/rss/world-news/rssfeed.xml",
  nation: "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",
  business: "https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml",
  technology: "https://www.hindustantimes.com/feeds/rss/technology/rssfeed.xml",
  entertainment: "https://www.hindustantimes.com/feeds/rss/entertainment/rssfeed.xml",
  sports: "https://www.hindustantimes.com/feeds/rss/sports/rssfeed.xml",
  health: "https://www.hindustantimes.com/feeds/rss/lifestyle/health/rssfeed.xml"
};

const HTNews = ({ mode, setMode }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState(() => localStorage.getItem('newsCategory') || "general");
  // HT is primarily English, so language filter might not change the feed itself,
  // but we keep the state to match the Filters component API.
  const [language, setLanguage] = useState(() => localStorage.getItem('newsLanguage') || "en");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const rssUrl = RSS_FEEDS[category] || RSS_FEEDS.general;
        // Using rss2json public API to bypass CORS issues in browser
        const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.status !== "ok") {
           throw new Error(data.message || "Failed to parse RSS feed");
        }

        let fetchedItems = data.items || [];

        // Client-side search filtering
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          fetchedItems = fetchedItems.filter(item => 
            (item.title && item.title.toLowerCase().includes(query)) || 
            (item.description && item.description.toLowerCase().includes(query))
          );
        }

        setItems(fetchedItems);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [searchQuery, category]);

  // Helper to extract image from description if needed, or use a default
  const getImageUrl = (item) => {
    if (item.enclosure && item.enclosure.link) {
      return item.enclosure.link;
    }
    if (item.thumbnail) {
      return item.thumbnail;
    }
    // Try to extract from description HTML
    const imgMatch = item.description?.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
    return "/news/hindustan-times-logo.png";
  };

  // Helper to clean description from HTML tags
  const cleanDescription = (html) => {
    if (!html) return "";
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <>
      <SEO 
        title={`${category.charAt(0).toUpperCase() + category.slice(1)} News - Hindustan Times | The Chronicle`}
        description={`Get the latest ${category} news from Hindustan Times. Real-time updates on ${category} topics with search functionality. Stay informed with The Chronicle.`}
        keywords={`${category} news, Hindustan Times, latest ${category} news, breaking ${category} news, real-time news`}
        url="https://the-chronicle.vercel.app/hindustan-times"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          minHeight: "90vh",
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
              <Typography variant="h6" color="text.secondary" sx={{ textAlign: "center" }}>
                {error}
              </Typography>
            </Box>
          ) : loading ? (
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
              {Array.from(new Array(5)).map((_, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <Box
                    sx={{
                      m: 2,
                      borderRadius: "2vh",
                      justifyContent: "space-between",
                      bgcolor: "background.paper",
                      boxShadow: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Box>
                      <Skeleton
                        sx={{
                          bgcolor: "background.paper",
                        }}
                        variant="rectangular"
                        height={200}
                      />
                    </Box>
                    <Box sx={{ p: 2 }}>
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
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : items.length > 0 ? (
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
              {items.map((item) => (
                <Grid item key={item.link || item.guid} xs={12} sm={6} md={4} lg={3}>
                  <NewsCard
                    title={item.title}
                    description={cleanDescription(item.description)}
                    imgUrl={getImageUrl(item)}
                    url={item.link}
                    dateTime={item.pubDate}
                    author={item.author || "Hindustan Times"}
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

export default HTNews;

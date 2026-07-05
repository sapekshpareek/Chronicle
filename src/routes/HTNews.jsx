import { Box, Card, CardContent, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Filters from "../components/shared/Filters";
import NewsCard from "../components/shared/NewsCard";
import SEO from "../components/SEO";

const RSS_FEEDS = {
  general: "latest/rssfeed.xml",
  world: "world-news/rssfeed.xml",
  nation: "india-news/rssfeed.xml",
  business: "business/rssfeed.xml",
  technology: "technology/rssfeed.xml",
  entertainment: "entertainment/rssfeed.xml",
  sports: "sports/rssfeed.xml",
  health: "lifestyle/health/rssfeed.xml"
};

const HTNews = ({ mode, setMode }) => {
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
        const rssPath = RSS_FEEDS[category] || RSS_FEEDS.general;
        const endpoint = `/api/htnews/${rssPath}`;
        
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // Check for parsing errors
        const parseError = xmlDoc.querySelector("parsererror");
        if (parseError) {
          throw new Error("Error parsing RSS feed");
        }

        const itemNodes = xmlDoc.querySelectorAll("item");
        let fetchedItems = Array.from(itemNodes).map(node => {
          const title = node.querySelector("title")?.textContent || "";
          const description = node.querySelector("description")?.textContent || "";
          const link = node.querySelector("link")?.textContent || "";
          const pubDate = node.querySelector("pubDate")?.textContent || "";
          
          let imgUrl = "/news/hindustan-times-logo.png";
          const mediaContent = node.getElementsByTagName("media:content")[0];
          if (mediaContent && mediaContent.getAttribute("url")) {
            imgUrl = mediaContent.getAttribute("url");
          } else {
            const enclosure = node.querySelector("enclosure");
            if (enclosure && enclosure.getAttribute("url")) {
              imgUrl = enclosure.getAttribute("url");
            } else {
              const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch && imgMatch[1]) {
                imgUrl = imgMatch[1];
              }
            }
          }

          return { title, description, link, pubDate, imgUrl };
        });

        // Client-side search filtering
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          fetchedItems = fetchedItems.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
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
              {items.map((item, index) => (
                <Grid item key={item.link || index} xs={12} sm={6} md={4} lg={3}>
                  <NewsCard
                    title={item.title}
                    description={cleanDescription(item.description)}
                    imgUrl={item.imgUrl}
                    url={item.link}
                    dateTime={item.pubDate}
                    author="Hindustan Times"
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

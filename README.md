# The Chronicle - News Aggregator

[![The Chronicle](https://img.shields.io/badge/The%20Chronicle-News%20Aggregator-blue?style=for-the-badge&logo=react)](https://the-chronicle.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-6.4.1-blue?style=flat-square&logo=mui)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 🌟 Live Demo
**[Visit The Chronicle](https://the-chronicle.vercel.app/)**

## 📰 About The Chronicle

The Chronicle is a modern, responsive news aggregator that brings you the latest news from multiple sources including **GNews**, **TheNewsAPI**, and **NewsAPI**. Built with React and Material-UI, it offers a sleek, clean interface with dark and light themes, real-time updates, and powerful search functionality.

### ✨ Key Features

- **📱 Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **🌙 Dark/Light Themes**: Toggle between themes with persistent preferences
- **🔍 Advanced Search**: Search across multiple news sources
- **🌍 Multi-language Support**: English and Hindi language options
- **📊 Category Filtering**: Browse news by categories (General, World, Business, Technology, etc.)
- **⚡ Real-time Updates**: Latest news with automatic refresh
- **🎨 Modern UI**: Clean, intuitive interface with Material Design
- **📱 PWA Ready**: Progressive Web App capabilities
- **🔒 Privacy Focused**: No user tracking, free to use

### 🛠️ Technology Stack

- **Frontend**: React 18.3.1, Material-UI 6.4.1
- **Build Tool**: Vite 6.0.5
- **Styling**: Tailwind CSS, Emotion
- **Routing**: React Router DOM 7.1.3
- **SEO**: React Helmet Async
- **Deployment**: Vercel

### 📊 News Sources

1. **GNews API**: Global news coverage with multiple categories
2. **TheNewsAPI**: Comprehensive news aggregation
3. **NewsAPI**: Real-time news from various sources

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sapekshpareek/chronicle.git
   cd chronicle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GNEWS_API=your_gnews_api_key
   VITE_NEWS_ORG_API=your_newsapi_key
   VITE_THE_NEWS_API=your_thenewsapi_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
chronicle/
├── public/
│   ├── logos/           # App logos and branding
│   │   ├── news/           # News source logos
│   │   ├── robots.txt      # SEO robots file
│   │   ├── sitemap.xml     # SEO sitemap
│   │   └── site.webmanifest # PWA manifest
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── shared/     # Shared components
│   │   │   └── SEO.jsx     # SEO component
│   │   ├── routes/         # Page components
│   │   ├── theme/          # Material-UI theme
│   │   └── main.jsx        # App entry point
│   ├── index.html          # Main HTML file
│   └── package.json        # Dependencies and scripts
```

## 🎨 Features in Detail

### 🔍 Search Functionality
- Real-time search across all news sources
- Search history and suggestions
- Filter by date and relevance

### 🌍 Multi-language Support
- English and Hindi language options
- Persistent language preferences
- Localized content delivery

### 📱 Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes

### 🌙 Theme System
- Dark and light mode support
- Persistent theme preferences
- Smooth theme transitions

## 🔧 API Integration

The app integrates with three major news APIs:

### GNews API
- **Endpoint**: `https://gnews.io/api/v4/`
- **Features**: Category filtering, language support, search
- **Rate Limit**: 100 requests/day (free tier)

### TheNewsAPI
- **Endpoint**: `https://api.thenewsapi.com/v1/`
- **Features**: Top headlines, source filtering
- **Rate Limit**: 500 requests/month (free tier)

### NewsAPI
- **Endpoint**: `https://newsapi.org/v2/`
- **Features**: Comprehensive news coverage
- **Rate Limit**: 100 requests/day (free tier)

## 📈 SEO Optimization

The Chronicle is fully optimized for search engines:

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: XML sitemap for better indexing
- **Robots.txt**: Proper crawler guidance
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Canonical URLs**: Prevent duplicate content issues

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Similar to Vercel deployment
- **GitHub Pages**: Static site hosting
- **AWS S3**: Static website hosting

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sapeksh Pareek**
- GitHub: [@sapekshpareek](https://github.com/sapekshpareek)
- LinkedIn: [Sapeksh Pareek](https://linkedin.com/in/sapekshpareek)

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the beautiful component library
- [Vite](https://vitejs.dev/) for the fast build tool
- [GNews](https://gnews.io/), [TheNewsAPI](https://thenewsapi.com/), and [NewsAPI](https://newsapi.org/) for providing news data
- [Vercel](https://vercel.com/) for hosting and deployment

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Vite and code splitting
- **Loading Speed**: Fast initial load with lazy loading

## 🔮 Future Roadmap

- [ ] Add more news sources
- [ ] Implement news bookmarking
- [ ] Add news sharing functionality
- [ ] Implement push notifications
- [ ] Add news analytics dashboard
- [ ] Support for more languages
- [ ] Offline reading capability

---

⭐ **Star this repository if you find it helpful!**

For questions or support, please open an issue on GitHub.

# BotConnect Portal 🤖

A modern, responsive dashboard portal built with React.js for managing multi-platform bot integrations across WhatsApp, Facebook, Instagram, and Telegram.

![BotConnect Portal](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.5-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-FF0055)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with gradient effects
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🌓 **Dark/Light Theme** - Toggle between themes
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🔗 **Deep Links Support** - Mobile app integration for social platforms
- 💳 **Dynamic Pricing Plans** - 4 different bot subscription tiers
- 💬 **Testimonials Slider** - Customer feedback carousel
- 📧 **Contact Form** - With validation and submit animation
- 🎯 **Feature Highlights** - Showcase key benefits
- 🔝 **Scroll Animations** - Engaging user experience

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd botconnect-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📂 Project Structure

```
botconnect-portal/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with theme toggle
│   │   ├── Hero.jsx             # Landing section with CTA
│   │   ├── SocialPlatforms.jsx  # Social media platform cards
│   │   ├── Features.jsx         # Feature highlights
│   │   ├── Pricing.jsx          # Pricing plans
│   │   ├── Testimonials.jsx     # Customer testimonials
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer with links
│   ├── data/
│   │   └── data.js              # All dynamic data
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Modify Data

All content is centralized in `src/data/data.js`:

- **Site Information** - Name, tagline, description
- **Social Platforms** - Add/edit platform integrations
- **Pricing Plans** - Adjust pricing tiers and features
- **Features** - Update feature highlights
- **Testimonials** - Add customer reviews
- **Footer Links** - Modify social media links

### Change Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#6366f1',    // Change primary color
      secondary: '#8b5cf6',  // Change secondary color
      accent: '#ec4899',     // Change accent color
    },
  },
}
```

## 🌐 Social Platform Integration

The portal includes deep linking for mobile apps:

- **WhatsApp**: `whatsapp://send`
- **Facebook Messenger**: `fb-messenger://`
- **Instagram**: `instagram://direct`
- **Telegram**: `tg://`

On desktop, these open the web versions.

## 📊 Pricing Plans

- **Starter** - 1 Bot - $8/month
- **Growth** - 3 Bots - $22/month (Popular)
- **Professional** - 5 Bots - $35/month
- **Enterprise** - 10 Bots - $65/month

## 🎯 Key Sections

1. **Hero Section** - Eye-catching landing with stats
2. **Social Platforms** - Interactive platform cards
3. **Features** - 6 key benefits with icons
4. **Pricing** - 4 pricing tiers with features
5. **Testimonials** - Customer feedback carousel
6. **Contact** - Contact form with business info

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Animation Features

- Page scroll animations
- Hover effects on cards
- Button interactions
- Smooth transitions
- Loading states
- Carousel animations

## 🌟 Future Enhancements

- [ ] Add authentication
- [ ] Integrate with real backend API
- [ ] Add dashboard analytics
- [ ] Multi-language support
- [ ] Payment gateway integration
- [ ] Real-time chat support

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, email support@botconnect.com or create an issue in the repository.

---

**Made with ❤️ by the BotConnect Team**

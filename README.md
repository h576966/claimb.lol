# Claimb.lol - Landing Page

A modern, responsive landing page for the Claimb iOS app - your personal League of Legends coach in your pocket.

## 🎯 Purpose

This project serves as the official landing page for the Claimb iOS coaching app, featuring:

1. **Professional Landing Page**: Clean, modern design showcasing the app's features
2. **App Store Integration**: Direct links to TestFlight and upcoming App Store release
3. **Feature Highlights**: AI coaching, privacy-first design, and iOS optimization

## ✨ Features

### Landing Page

- Modern, responsive design with Tailwind CSS
- Hero section with app icon and clear call-to-action
- Feature highlights with icons and descriptions
- Professional footer with support and legal links
- Dark theme optimized for the gaming audience

### Key Highlights

- **AI-Powered Coaching**: Personalized insights with specific timing feedback
- **Privacy-First Design**: All data stays on your iPhone - no servers, no tracking
- **iOS 18+ Optimized**: Built specifically for modern iOS devices
- **TestFlight Ready**: Available for beta testing through TestFlight

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel (static export compatible)
- **Icons**: Custom SVG icons and system icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd claimb.lol
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 About the Claimb iOS App

Claimb is a **local-first** League of Legends companion app designed for iPhone users who want to improve their gameplay through data-driven insights and personalized coaching.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Static Export

```bash
npm run build
```

The `out/` directory contains static files for any hosting service.

## 🏗️ Project Structure

```
claimb.lol/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── privacy/           # Privacy policy page
│   ├── support/           # Support page
│   └── terms/             # Terms of service page
├── components/             # React components
│   ├── Header.tsx         # Site header
│   └── Footer.tsx         # Site footer
├── lib/                    # Utilities
│   └── constants.ts       # App configuration
├── public/                 # Static assets
│   └── images/            # App icons and screenshots
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🔧 Customization

### Design System

The landing page uses a custom Tailwind design system with:

- **Primary Colors**: Blue tones for main elements and CTAs
- **Dark Theme**: Optimized for the gaming audience
- **Responsive Design**: Mobile-first approach
- **Typography**: Clean, readable fonts with proper hierarchy

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: Responsive design for all screen sizes
- **JavaScript**: ES6+ features required

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

- **Not affiliated with Riot Games**
- **League of Legends** is a trademark of Riot Games, Inc.
- **This is a landing page** for the Claimb iOS app

## 🆘 Support

- **Issues**: Create a GitHub issue
- **App Support**: Contact support@claimb.lol
- **Website**: Visit [claimb.lol](https://claimb.lol)

---

Built with ❤️ for the League of Legends community

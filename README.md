# Claimb.lol - League of Legends Companion Site

A modern, responsive web application that serves as both a landing site for the Claimb macOS app and a powerful LoL performance analyser widget.

## 🎯 Purpose

This project serves two main purposes:

1. **Landing Site**: Professional landing page for the Claimb macOS coaching app with download links and feature showcases
2. **LoL Analyser Widget**: Interactive tool where users can enter their summoner name and region to receive personalized performance insights

## ✨ Features

### Landing Site
- Modern, responsive design with Tailwind CSS
- Hero section with clear call-to-action
- Feature showcase highlighting app capabilities
- Professional footer with links and information

### LoL Analyser Widget
- **Summoner Lookup**: Enter summoner name and select region
- **Performance Analysis**: Comprehensive stats from last 20 matches
- **Role Analysis**: Best role identification and performance metrics
- **Champion Performance**: Detailed champion-specific statistics
- **Trend Analysis**: Early/mid/late game performance trends
- **AI Coaching**: Optional LLM-powered insights and recommendations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **APIs**: Riot Games API (LoL data), OpenAI/OpenRouter/Together.ai (AI coaching)
- **Deployment**: Vercel (static export compatible)
- **State Management**: React hooks (client-side only)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Riot Games API key (required)
- Optional: LLM API key for coaching features

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd claimb.lol
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```

   Edit `.env.local` and add your API keys:
   ```env
   NEXT_PUBLIC_RIOT_API_KEY=your_riot_api_key_here
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here  # Optional
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 API Keys

### Required: Riot Games API
- **Purpose**: Fetch summoner data, match history, and match details
- **Cost**: Free tier available (100 requests per 2 minutes)
- **Get it**: [Riot Developer Portal](https://developer.riotgames.com/)

### Optional: LLM API (for AI coaching)
Choose one of these providers:

#### OpenAI (GPT-3.5-turbo)
- **Cost**: ~$0.001-0.002 per analysis
- **Quality**: High
- **Get it**: [OpenAI Platform](https://platform.openai.com/)

#### OpenRouter (GPT-3.5-turbo)
- **Cost**: ~$0.001-0.002 per analysis
- **Quality**: High
- **Get it**: [OpenRouter](https://openrouter.ai/)

#### Together.ai (Llama-2-7b)
- **Cost**: ~$0.0005-0.001 per analysis
- **Quality**: Good
- **Get it**: [Together.ai](https://together.ai/)

## 📊 Performance Analysis Features

### Core Metrics
- **KDA Ratio**: Kills + Assists / Deaths
- **CS per minute**: Creep score efficiency
- **Damage per minute**: Combat effectiveness
- **Vision Score**: Map awareness and control
- **Win Rate**: Success rate across matches

### Advanced Insights
- **Role Performance**: Best role identification
- **Champion Analysis**: Performance by champion
- **Trend Analysis**: Early/mid/late game patterns
- **Consistency Metrics**: Performance stability

### AI Coaching (Optional)
- **Performance Summary**: AI-generated overview
- **Key Insights**: Identified playstyle patterns
- **Actionable Recommendations**: Specific improvement tips

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Static Export
```bash
npm run build
npm run export
```
The `out/` directory contains static files for any hosting service.

### Environment Variables for Production
Ensure these are set in your hosting platform:
- `NEXT_PUBLIC_RIOT_API_KEY`
- `NEXT_PUBLIC_OPENAI_API_KEY` (optional)

## 🏗️ Project Structure

```
claimb.lol/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Site header
│   ├── Hero.tsx           # Hero section
│   ├── LoLAnalyser.tsx    # Main analyser widget
│   ├── SummonerInput.tsx  # Summoner input form
│   ├── AnalysisResults.tsx # Results display
│   └── ...                # Other components
├── services/               # Business logic
│   ├── riotApi.ts         # Riot API integration
│   ├── performanceAnalysis.ts # Data analysis
│   └── llmService.ts      # AI coaching
├── types/                  # TypeScript interfaces
│   └── lol.ts             # LoL data types
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🔧 Customization

### Design System
The app uses a custom Tailwind design system with:
- **Primary Colors**: Blue tones for main elements
- **Success Colors**: Green for positive metrics
- **Warning Colors**: Yellow for neutral metrics
- **Error Colors**: Red for negative metrics

### Adding New Regions
Edit `services/riotApi.ts` to add new regions:
```typescript
export const REGIONS: Region[] = [
  // ... existing regions
  { id: 'new', name: 'New Region', endpoint: 'new.api.riotgames.com' }
]
```

### Customizing Analysis
Modify `services/performanceAnalysis.ts` to adjust:
- Performance thresholds
- Trend calculation logic
- Role identification rules

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
- **Use at your own risk** - API rate limits apply
- **Data accuracy** depends on Riot API availability

## 🆘 Support

- **Issues**: Create a GitHub issue
- **Documentation**: Check the code comments
- **Community**: Join our Discord (if available)

## 🔮 Future Enhancements

- [ ] Champion mastery integration
- [ ] Rank tracking and progression
- [ ] Team performance analysis
- [ ] Advanced filtering and search
- [ ] Export functionality
- [ ] Dark mode toggle
- [ ] Mobile app version

---

Built with ❤️ for the League of Legends community

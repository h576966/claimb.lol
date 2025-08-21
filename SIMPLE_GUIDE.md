# Simple Development Guide for Claimb.lol

## 🎯 **What This Is**
A simple guide for building Claimb.lol - a League of Legends performance analyser. Keep it simple, keep it working.

## 🚀 **Quick Start**

### 1. Install & Run
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### 2. Set Up API Key
```bash
cp env.example .env.local
# Edit .env.local and add your Riot API key
```

### 3. Test Your Setup
```bash
npm run type-check  # Check TypeScript
npm run lint        # Check code quality
npm test            # Run basic tests
```

## 🎨 **Design System (MUST FOLLOW)**

### Colors
- **Primary**: Teal (`#66cc99`) - Use for buttons, links, positive metrics
- **Success**: Teal green - Use for good performance
- **Warning**: Orange (`#ff9f0a`) - Use for neutral/caution
- **Error**: Orange red (`#d8674a`) - Use for bad performance
- **Backgrounds**: Black/gray with glass effects

### Components
```tsx
// ✅ Use these utility classes
<div className="card">Content</div>
<button className="btn-primary">Action</button>
<button className="btn-secondary">Secondary</button>
<input className="input-field" />

// ❌ Don't hardcode colors
<div className="bg-blue-500">Wrong!</div>
<div style={{color: 'red'}}>Wrong!</div>
```

## ⚛️ **React Basics (Learning Focus)**

### Component Structure
```tsx
interface ComponentProps {
  title: string;
  onAction: () => void;
  isActive?: boolean;
}

export function Component({ title, onAction, isActive = false }: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onAction();
    } catch (error) {
      console.error('Failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-text-900 dark:text-text-50">
        {title}
      </h3>
      <button
        className="btn-primary"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Action'}
      </button>
    </div>
  );
}
```

### State Management
```tsx
// Local state for component
const [data, setData] = useState<Data[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

// Loading state pattern
const fetchData = async () => {
  setIsLoading(true);
  setError(null);

  try {
    const result = await api.getData();
    setData(result);
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to fetch');
  } finally {
    setIsLoading(false);
  }
};
```

## 🚨 **API Integration (Critical)**

### Rate Limiting
- **Riot API**: 100 requests per 2 minutes
- **Built-in protection**: 100ms delay between requests
- **Error handling**: Clear messages when limits hit

### API Calls Pattern
```tsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await riotApiService.getSummoner(name, region);
      setSummoner(result);
    } catch (error) {
      // Handle specific error types
      if (error.message.includes('Rate limit')) {
        setError('Too many requests. Please wait a few minutes.');
      } else if (error.message.includes('not found')) {
        setError('Summoner not found. Check name and region.');
      } else {
        setError('Failed to fetch data. Please try again.');
      }
    }
  };

  if (name && region) {
    fetchData();
  }
}, [name, region]);
```

## 🧪 **Testing (Keep Simple)**

### Run Tests
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Test Pattern
```tsx
describe('Component', () => {
  it('renders correctly', () => {
    render(<Component title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles user interaction', () => {
    render(<Component onAction={mockFn} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockFn).toHaveBeenCalled();
  });
});
```

## 🔧 **Common Tasks**

### Add New Component
1. Create file: `components/NewComponent.tsx`
2. Define props interface
3. Use design system classes
4. Add basic test
5. Import and use

### Add New API Endpoint
1. Add method to `services/riotApi.ts`
2. Use built-in rate limiting
3. Handle errors properly
4. Test the service

### Update Colors
1. Edit `tailwind.config.js`
2. Update `app/globals.css` if needed
3. Test in light/dark mode

## 🚨 **Common Issues**

### Build Errors
```bash
# TypeScript errors
npm run type-check

# ESLint errors
npm run lint

# Clean install
rm -rf .next node_modules
npm install
```

### API Issues
- Check environment variables
- Verify API key is valid
- Check rate limiting
- Test with known summoner

### Styling Issues
- Use only design system colors
- Check dark mode compatibility
- Verify Tailwind classes exist

## 📱 **Responsive Design**

### Breakpoints
```tsx
// Mobile first approach
<div className="text-sm md:text-base lg:text-lg">
<div className="p-4 md:p-6 lg:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Spacing
```tsx
// 8px grid: 4, 8, 16, 24, 32, 48, 64
<div className="p-4">     // 16px
<div className="p-6">     // 24px
<div className="space-y-4"> // 16px between children
```

## 🚀 **Deployment**

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy automatically

### Environment Variables
```bash
# Required
NEXT_PUBLIC_RIOT_API_KEY=your_key_here

# Optional (for future features)
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## 🔑 **Key Principles**

1. **Keep it simple** - Don't over-engineer
2. **Use the design system** - Colors and components
3. **Handle errors gracefully** - User feedback is key
4. **Test the basics** - Does it work?
5. **Rate limit properly** - Stay on Riot's good side

## 📚 **When You're Stuck**

1. **Check the Cursor rules** (`.cursorrules`)
2. **Look at existing components** for patterns
3. **Check TypeScript errors** first
4. **Test manually** - click around
5. **Keep it simple** - don't add complexity

---

**Remember**: This is a hobby project. Focus on making it work well, not making it perfect. Learn as you go, and keep it fun!

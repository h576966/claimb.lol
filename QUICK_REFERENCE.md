# Quick Reference Card

## 🚨 Critical Rules (Must Follow)

### Colors & Design
- **ONLY** use colors from `tailwind.config.js` design system
- **NEVER** hardcode colors like `bg-blue-500` or `#10B981`
- Use utility classes: `.card`, `.btn-primary`, `.btn-secondary`, `.input-field`

### TypeScript
- **ALWAYS** type component props with interfaces
- **NEVER** use `any` type
- Use named exports for components, default for services
- Use `@/` prefix for absolute imports

### React
- **ALWAYS** wrap API calls in try-catch
- **ALWAYS** show loading states and error messages
- Use proper dependency arrays in `useEffect`
- Avoid prop drilling, use local state

## ✅ Quick Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Check code quality
npm run type-check   # Check TypeScript

# Testing
npm test             # Run tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report

# Deployment
npm run export       # Static export
npm run deploy:vercel # Deploy to Vercel
```

## 🎨 Design System Classes

### Colors
```tsx
// Primary (Blue)
bg-primary-600 text-white    // Main buttons
bg-primary-50 text-primary-700 // Subtle backgrounds

// Success (Green)
bg-success-100 text-success-800 // Positive metrics
bg-success-50 text-success-700  // Success states

// Warning (Yellow)
bg-warning-100 text-warning-800 // Caution metrics
bg-warning-50 text-warning-700  // Warning states

// Error (Red)
bg-error-100 text-error-800     // Negative metrics
bg-error-50 text-error-700      // Error states
```

### Components
```tsx
// Cards
<div className="card">Content</div>

// Buttons
<button className="btn-primary">Primary Action</button>
<button className="btn-secondary">Secondary Action</button>

// Inputs
<input className="input-field" type="text" />

// Layout
<div className="space-y-4">     // Vertical spacing
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> // Responsive grid
```

## 🔧 Common Patterns

### Component Structure
```tsx
interface ComponentProps {
  title: string;
  onAction: () => void;
  isActive?: boolean;
}

export function Component({ title, onAction, isActive = false }: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async () => {
    setIsLoading(true);
    try {
      await onAction();
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <button
        className="btn-primary"
        onClick={handleAction}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Action'}
      </button>
    </div>
  );
}
```

### API Integration
```tsx
const [data, setData] = useState<Data[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await api.getData();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, []);
```

## 🚨 Error Handling

### API Errors
```tsx
// Always handle these status codes
if (error.response?.status === 429) {
  throw new Error('Rate limit exceeded. Please try again later.');
} else if (error.response?.status === 404) {
  throw new Error('Summoner not found. Please check the name and region.');
} else if (error.response?.status === 403) {
  throw new Error('API key invalid or expired.');
}
```

### User Feedback
```tsx
// Loading state
{isLoading && <LoadingState />}

// Error state
{error && <ErrorState error={error} onRetry={handleRetry} />}

// Success state
{data && <SuccessMessage data={data} />}
```

## 📱 Responsive Design

### Breakpoints
```tsx
// Mobile first approach
<div className="text-sm md:text-base lg:text-lg">
<div className="p-4 md:p-6 lg:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
```

### Spacing System
```tsx
// 8px grid: 4, 8, 16, 24, 32, 48, 64
<div className="p-4">     // 16px
<div className="p-6">     // 24px
<div className="p-8">     // 32px
<div className="space-y-4"> // 16px between children
```

## 🔍 Code Quality Checks

### Before Committing
- [ ] `npm run type-check` passes
- [ ] `npm run lint` shows no errors
- [ ] All components use design system classes
- [ ] Error handling implemented
- [ ] Loading states shown
- [ ] Responsive design tested

### Common Issues
```tsx
// ❌ Don't do this
<div className="bg-blue-500">           // Hardcoded color
<button style={{color: 'red'}}>        // Inline styles
export function Component(props: any)   // Any type
useEffect(() => { fetchData() }, [])   // Missing dependency

// ✅ Do this instead
<div className="bg-primary-600">        // Design system color
<button className="text-error-600">    // Utility class
export function Component(props: ComponentProps) // Proper typing
useEffect(() => { fetchData() }, [fetchData]) // Correct dependency
```

## 📚 File Naming

### Components
```
LoLAnalyser.tsx          // PascalCase
SummonerInput.tsx        // PascalCase
AnalysisResults.tsx      // PascalCase
```

### Services
```
riotApi.ts              // camelCase
performanceAnalysis.ts   // camelCase
llmService.ts           // camelCase
```

### Types
```
lol.ts                  // camelCase
api.ts                  // camelCase
common.ts               // camelCase
```

---

**Remember**: When in doubt, check the full `.cursorrules` file or ask the team. Consistency is key!

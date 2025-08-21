# Development Guide

This guide provides practical development workflows and checklists to complement the Cursor rules.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git configured
- VS Code or Cursor with recommended extensions

### Initial Setup
```bash
# Clone and install
git clone <repository-url>
cd claimb.lol
npm install

# Set up environment
cp env.example .env.local
# Edit .env.local with your API keys

# Start development
npm run dev
```

## 🔧 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes following Cursor rules
# Test your changes
npm run type-check
npm run lint

# Commit with descriptive message
git commit -m "feat: add new feature description"

# Push and create PR
git push origin feature/your-feature-name
```

### 2. Code Review Checklist
- [ ] Code follows Cursor rules
- [ ] TypeScript types are properly defined
- [ ] Components use design system classes
- [ ] Error handling is implemented
- [ ] Loading states are shown
- [ ] Responsive design works
- [ ] No console.log statements
- [ ] All ESLint warnings resolved

### 3. Testing Checklist
- [ ] Component renders correctly
- [ ] Props are properly typed
- [ ] State changes work as expected
- [ ] API calls handle errors
- [ ] Loading states display
- [ ] Responsive design works
- [ ] Accessibility standards met

## 📁 File Structure Guidelines

### Components
```
components/
├── FeatureName/
│   ├── FeatureName.tsx          # Main component
│   ├── FeatureName.test.tsx     # Tests
│   ├── FeatureName.stories.tsx  # Storybook (optional)
│   └── index.ts                 # Export file
```

### Services
```
services/
├── serviceName.ts               # Service implementation
├── serviceName.test.ts          # Service tests
└── serviceName.types.ts         # Service-specific types
```

### Types
```
types/
├── feature.ts                   # Feature-specific types
├── api.ts                       # API-related types
└── common.ts                    # Shared types
```

## 🎨 Design System Usage

### Color Classes
```tsx
// ✅ Correct - using design system
<div className="bg-primary-600 text-white">
<div className="bg-success-100 text-success-800">
<div className="bg-warning-50 text-warning-700">

// ❌ Incorrect - hardcoded colors
<div className="bg-blue-500 text-white">
<div style={{ backgroundColor: '#10B981' }}>
```

### Component Classes
```tsx
// ✅ Correct - using utility classes
<div className="card">
<button className="btn-primary">
<input className="input-field">

// ❌ Incorrect - custom styles
<div className="bg-white rounded-lg shadow p-6">
<button className="bg-blue-600 text-white px-4 py-2 rounded">
```

## 🔍 Code Quality Standards

### TypeScript
```tsx
// ✅ Correct - proper typing
interface ComponentProps {
  title: string;
  onAction: () => void;
  isActive?: boolean;
}

export function Component({ title, onAction, isActive = false }: ComponentProps) {
  // Component implementation
}

// ❌ Incorrect - any types
export function Component(props: any) {
  // Component implementation
}
```

### React Hooks
```tsx
// ✅ Correct - proper hook usage
const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState<Data[]>([]);

useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await api.getData();
      setData(result);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, []);

// ❌ Incorrect - missing dependencies
useEffect(() => {
  fetchData();
}, []); // Missing fetchData dependency
```

## 🚨 Common Issues & Solutions

### Build Errors
```bash
# TypeScript errors
npm run type-check

# ESLint errors
npm run lint

# Build issues
rm -rf .next node_modules
npm install
npm run build
```

### API Integration Issues
- Check environment variables are set
- Verify API key is valid
- Check rate limiting (100 requests/2min)
- Ensure proper error handling

### Styling Issues
- Use only design system colors
- Follow 8px grid system
- Test responsive breakpoints
- Verify Tailwind classes exist

## 📊 Performance Guidelines

### Bundle Size
```bash
# Analyze bundle
npm run build
# Check .next/analyze/ for bundle analysis
```

### Optimization Tips
- Use dynamic imports for large components
- Implement proper loading states
- Optimize images and assets
- Use React.memo for expensive components

## 🧪 Testing Strategy

### Unit Tests
```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Patterns
```tsx
// Component test example
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## 🚀 Deployment Checklist

### Pre-deployment
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] ESLint warnings resolved
- [ ] Environment variables set
- [ ] API keys configured
- [ ] Performance tested

### Deployment
```bash
# Build for production
npm run build

# Test production build
npm start

# Deploy to Vercel
npm run deploy:vercel

# Or export static files
npm run export
```

## 🔒 Security Checklist

- [ ] No API keys in code
- [ ] Environment variables properly set
- [ ] Input validation implemented
- [ ] Error messages don't leak sensitive info
- [ ] HTTPS enforced in production

## 📝 Documentation

### Code Comments
```tsx
/**
 * Fetches summoner data from Riot API
 * @param summonerName - The summoner's name
 * @param region - The server region
 * @returns Promise resolving to summoner data
 * @throws Error if API call fails
 */
async function fetchSummoner(summonerName: string, region: string): Promise<Summoner> {
  // Implementation
}
```

### README Updates
- Update setup instructions
- Document new features
- Add troubleshooting steps
- Update API documentation

## 🎯 Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 500KB (gzipped)
- **API Response Time**: < 2s

## 🔄 Continuous Improvement

### Regular Reviews
- Code quality metrics
- Performance benchmarks
- User feedback analysis
- Security audit results

### Refactoring
- Remove unused code
- Optimize slow operations
- Improve type safety
- Enhance error handling

---

Remember: The goal is to maintain high code quality while delivering value to users. When in doubt, refer to the Cursor rules and prioritize maintainability over cleverness.

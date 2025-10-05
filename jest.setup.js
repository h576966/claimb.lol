import '@testing-library/jest-dom'

// Mock environment variables
process.env.NEXT_PUBLIC_RIOT_API_KEY = 'test-api-key'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }
  },
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

// Mock console methods in tests to reduce noise
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
}

// Extend Jest matchers
expect.extend({
  toBeInTheDocument(received) {
    const pass = received !== null && received !== undefined
    if (pass) {
      return {
        message: () => `expected ${received} not to be in the document`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} to be in the document`,
        pass: false,
      }
    }
  },
  toHaveClass(received, ...expectedClasses) {
    if (!received || !received.classList) {
      return {
        message: () => `expected ${received} to have classList`,
        pass: false,
      }
    }

    const pass = expectedClasses.every(className =>
      received.classList.contains(className)
    )

    if (pass) {
      return {
        message: () => `expected ${received} not to have classes ${expectedClasses.join(', ')}`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} to have classes ${expectedClasses.join(', ')}`,
        pass: false,
      }
    }
  },
})

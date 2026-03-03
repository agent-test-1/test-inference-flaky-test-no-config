import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    testTimeout: 5000,
    hookTimeout: 5000,
    teardownTimeout: 5000,
    // Enable retries to see flaky behavior more clearly
    retry: 0,
    // Run tests in sequence to avoid interference
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true
      }
    }
  }
})

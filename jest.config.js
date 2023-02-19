const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

const customJestConfig = {
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/locales/(.*)$': '<rootDir>/locales/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
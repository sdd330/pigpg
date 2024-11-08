import type { Config } from 'jest';

export const config = {
  roots: ["<rootDir>"],
  collectCoverage: true,
  coverageDirectory: '../coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist",
  ],
  preset: "ts-jest",
} as const satisfies Config;
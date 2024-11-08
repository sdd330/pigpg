import type { Config } from "jest";
import { config as baseConfig } from './base';

const config = {
  ...baseConfig,
  rootDir: 'src',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
} as const satisfies Config;

export default config;

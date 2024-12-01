import { defineConfig, devices } from '@playwright/test';
// import { nxE2EPreset } from '@nx/playwright/preset';

import { workspaceRoot } from '@nx/devkit';

import { sharedE2eConfig } from '@e2e/shared';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4300';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...sharedE2eConfig,
  // ...nxE2EPreset(__filename, { testDir: './src' }),
  testDir: './src',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    trace: 'on',
  },
  reporter: 'html',
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npx nx run my-app:preview',
    url: 'http://localhost:4300',
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
  },
  projects: [
    ...sharedE2eConfig.projects,
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

/**
 * 🧪 Modular Playwright Runner
 * 🔹 Supports unified or isolated spec execution
 * 🔹 Handles config resolution, quoting, and report output
 * 🔹 Mentor-friendly structure with teachable fallback logic
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const specs = [
  '../tests/1_create.spec.ts',
  '../tests/2_read.spec.ts',
  '../tests/3_update.spec.ts',
  '../tests/4_delete.spec.ts',
  '../tests/5_auth.spec.ts',
  '../tests/6_performance.spec.ts',
];

const configPath = path.resolve(__dirname, '../playwright.config.ts');
const runMode: 'unified' | 'isolated' = 'unified'; // Change to 'isolated' if needed

const runUnified = () => {
  const quotedSpecs = specs.map(s => `"${path.resolve(__dirname, s)}"`).join(' ');
  console.log(`🔹 Running unified test suite:\n${quotedSpecs}`);
  execSync(`npx playwright test ${quotedSpecs} --config="${configPath}"`, { stdio: 'inherit' });
};

const runIsolated = () => {
  for (const spec of specs) {
    const specName = path.basename(spec, '.spec.ts');
    const resolvedSpec = path.resolve(__dirname, spec);
    const reportDir = path.resolve(__dirname, `../playwright-report-${specName}`);

    console.log(`🔹 Running isolated spec: ${specName}`);
    execSync(
      `npx playwright test "${resolvedSpec}" --config="${configPath}" --reporter=html --output="${reportDir}"`,
      { stdio: 'inherit' }
    );
  }
};

if (runMode === 'unified') {
  runUnified();
} else {
  runIsolated();
}

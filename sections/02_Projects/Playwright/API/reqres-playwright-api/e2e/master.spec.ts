import { test } from '@playwright/test';
import { execSync } from 'child_process';
/*
if (!process.env.RUN_MASTER) {
  test.skip(true, 'Skipping master.spec.ts unless RUN_MASTER is set');
}
*/

const specs = [
  '../tests/create.spec.ts',
  '../tests/read.spec.ts',
  '../tests/update.spec.ts',
  '../tests/delete.spec.ts',
  '../tests/auth.spec.ts',
  '../tests/performance.spec.ts',
];

execSync(`npx playwright test ${specs.map(s => `"${s}"`).join(' ')} --config=../playwright.config.ts`, { stdio: 'inherit' });


/*
test.describe('🧩 Master Test Suite', () => {
  require('../create.spec');
  require('../read.spec');
  require('../update.spec');
  require('../delete.spec');
  require('../auth.spec');
  require('../performance.spec');
});
*/
 
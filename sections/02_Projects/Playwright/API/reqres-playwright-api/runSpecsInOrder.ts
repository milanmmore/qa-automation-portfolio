import { execSync } from 'child_process';

const specs = [
  'tests/create.spec.ts',
  'tests/read.spec.ts',
  'tests/update.spec.ts',
  'tests/delete.spec.ts',
];

for (const spec of specs) {
  console.log(`🔹 Running ${spec}`);
  execSync(`npx playwright test ${spec}`, { stdio: 'inherit' });
}
console.log('✅ All specs executed in order.');

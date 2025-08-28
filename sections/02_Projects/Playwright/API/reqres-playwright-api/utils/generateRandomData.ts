// utils/generateRandomName.ts

const titles = ['Mr.', 'Ms.', 'Dr.', 'Prof.', 'Mx.'];
const firstNames = ['Aarav', 'Milan', 'Isha', 'Ravi', 'Sneha', 'Kiran', 'Neha', 'Arjun'];
const lastNames = ['More', 'Patel', 'Sharma', 'Desai', 'Verma', 'Joshi', 'Reddy', 'Kapoor'];

export function generateRandomName(): { firstName: string; fullName: string } {
  const title = titles[Math.floor(Math.random() * titles.length)];
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];

  return {
      firstName: first,
      fullName: `${title} ${first} ${last}`
  };
}

export function generateRandomEmail(): string {
  const domains = ['example.com', 'test.com', 'demo.com'];
  const randomName = Math.random().toString(36).substring(2, 7);
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${randomName}@${randomDomain}`;
}

export function generateEmail(name: string): string {
  const domains = ['example.com', 'test.com', 'demo.com'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${name}@${randomDomain}`;
}

export function generateRandomNumber(): number {
  return Math.floor(Math.random() * 100);
}

export function generateFourDigitNumber(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

export function generateRandomJobTitle(): string {
  const jobTitles = ['Software Engineer', 'QA Engineer', 'Product Manager', 'Designer'];
  return jobTitles[Math.floor(Math.random() * jobTitles.length)];
}


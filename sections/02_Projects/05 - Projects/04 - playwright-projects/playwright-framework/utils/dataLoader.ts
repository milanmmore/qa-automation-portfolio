import fs from 'fs';
import path from 'path';

export function loadTestData(fileName: string) {
  const filePath = path.join(__dirname, '../config', fileName);
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
}

import fs from 'fs'
import path from 'path';

export function getSortedPostsData() {
  const filePath = path.join(process.cwd(), 'data/players.json');
  const data = fs.readFileSync(filePath, 'utf8');
  const players = JSON.parse(data);
  return players
}

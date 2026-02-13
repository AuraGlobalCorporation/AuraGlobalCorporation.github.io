/**
 * Campaign Counter Update Script
 * Runs daily at 11:30 PM IST via GitHub Actions
 *
 * Replace the data source below with your actual database/spreadsheet API
 * Currently uses the existing JSON file as-is (no-op placeholder)
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, '..', 'public', 'campaign-data.json');

async function updateCounter() {
  try {
    const currentData = JSON.parse(readFileSync(dataPath, 'utf-8'));

    // TODO: Replace this section with your actual data source
    // Example: Fetch from Google Sheets API, Airtable, Supabase, etc.
    // const response = await fetch('https://your-api.com/signups/count');
    // const { count } = await response.json();
    // currentData.spotsRemaining = currentData.totalSpots - count;

    // Update timestamp to current IST time
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + istOffset);
    currentData.lastUpdated = istDate.toISOString().replace('Z', '+05:30');

    writeFileSync(dataPath, JSON.stringify(currentData, null, 2) + '\n');
    console.log(`Campaign counter updated: ${currentData.spotsRemaining} spots remaining`);
    console.log(`Last updated: ${currentData.lastUpdated}`);
  } catch (error) {
    console.error('Failed to update campaign counter:', error);
    process.exit(1);
  }
}

updateCounter();

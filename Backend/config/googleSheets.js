import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  // Aggressively clean the key for Vercel (removes quotes, fixes newlines, removes accidental spaces)
  key: process.env.GOOGLE_PRIVATE_KEY
    ?.trim()
    .replace(/^["']|["']$/g, '') // Remove surrounding quotes
    .replace(/\\n/g, '\n')       // Fix escaped newlines
    .replace(/\n /g, '\n'),      // Fix newline+space issues
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

const connectToGoogleSheets = async () => {
  try {
    await doc.loadInfo(); 
    console.log(`Connected to Google Sheet: ${doc.title}`);
    return doc;
  } catch (error) {
    console.error('Error connecting to Google Sheets:', error);
    throw error;
  }
};

export { connectToGoogleSheets, doc };
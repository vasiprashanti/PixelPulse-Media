import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  // Support Base64 encoding for Vercel (much more stable for multiline keys)
  key: (() => {
    let key = process.env.GOOGLE_PRIVATE_KEY?.trim() || '';
    if (!key) return undefined;
    
    // Check if it's Base64 (doesn't start with ---)
    if (!key.startsWith('-----')) {
      try {
        key = Buffer.from(key, 'base64').toString('utf8');
      } catch (e) {
        console.error('Failed to decode Base64 Google Private Key');
      }
    }
    
    return key.replace(/\\n/g, '\n').replace(/\n /g, '\n');
  })(),
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
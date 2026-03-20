import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const normalizePrivateKey = (rawKey, rawBase64Key) => {
  const source = rawBase64Key
    ? Buffer.from(rawBase64Key, 'base64').toString('utf8')
    : rawKey;

  if (!source) {
    return undefined;
  }

  const trimmed = source.trim();
  const unquoted =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed;

  return unquoted.replace(/\\n/g, '\n').replace(/\r\n/g, '\n');
};

const requiredEnvVars = [
  'GOOGLE_SERVICE_ACCOUNT_EMAIL',
  'GOOGLE_SHEET_ID',
];

const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);
if (missingEnvVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

const privateKey = normalizePrivateKey(
  process.env.GOOGLE_PRIVATE_KEY,
  process.env.GOOGLE_PRIVATE_KEY_BASE64,
);

if (!privateKey) {
  throw new Error(
    'Missing Google private key. Set GOOGLE_PRIVATE_KEY or GOOGLE_PRIVATE_KEY_BASE64.',
  );
}

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: privateKey,
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
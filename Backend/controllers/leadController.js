import { doc } from '../config/googleSheets.js';

export const createLead = async (req, res) => {
  const { 
    name, 
    mobileNumber, 
    businessName, 
    businessEmail, 
    website, 
    budget 
  } = req.body;

  if (!name || !mobileNumber || !businessName) {
    return res.status(400).json({ error: 'Name, Mobile Number, and Business Name are required.' });
  }

  try {
    // Ensure Google Sheets metadata is loaded (v3 requirement)
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; 

    await sheet.addRow({
      'Name': name,
      'Mobile Number': mobileNumber,
      'Business Name': businessName,
      'Business Email': businessEmail || 'Not Provided',
      'Website': website || 'Not Provided',
      'Monthly Budget': budget || 'Not Selected',
      'Submission Date': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    });

    res.status(201).json({ success: true, message: 'Lead successfully captured and sent to Google Sheets.' });
  } catch (error) {
    console.error('Failed to add lead:', error);

    const jwtSignatureError =
      error?.response?.data?.error_description === 'Invalid JWT Signature.' ||
      error?.response?.data?.error === 'invalid_grant';

    if (jwtSignatureError) {
      return res.status(500).json({
        success: false,
        error: 'Google Sheets authentication failed. Verify backend Google environment variables.',
      });
    }

    res.status(500).json({ success: false, error: 'Server error while saving lead.' });
  }
};
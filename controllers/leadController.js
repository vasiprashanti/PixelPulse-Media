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
    res.status(500).json({ success: false, error: 'Server error while saving lead.' });
  }
};
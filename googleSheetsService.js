const { google } = require('googleapis');
const dotenv = require("dotenv");
dotenv.config();
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES
  });
  const authToken = await auth.getClient();
  return authToken;
}

async function getSpreadSheet({spreadsheetId, auth}) {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  return res;
}

async function getSpreadSheetValues({spreadsheetId, auth, sheetName}) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range: sheetName
  });
  return res;
}

async function addToSheets({spreadsheetId, auth, range, valueInputOption, insertDataOption, resource}){
    try {
        const res = await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: range,
            valueInputOption: valueInputOption,
            insertDataOption: insertDataOption,
            resource: resource,
            auth: auth
        })
        console.log('output for post', JSON.stringify(res.data));
    } catch(error) {
        console.log(error.message, error.stack);
    }
}


module.exports = {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues,
  addToSheets
}

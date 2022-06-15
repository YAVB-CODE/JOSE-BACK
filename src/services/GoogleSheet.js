const { google } = require("googleapis");
const path = require("path");

class GoogleSheetService {
  auth;
  authClientObject;
  googleSheetsInstance;
  spreadsheetId;
  nameSheet;

  constructor(spreadsheetId, nameSheet) {
    this.spreadsheetId = spreadsheetId;
    this.nameSheet = nameSheet;
  }

  async init() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: path.resolve(__dirname, "../", "../", "credentials.json"),
      
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    this.authClientObject = await this.auth.getClient();
    this.googleSheetsInstance = google.sheets({
      version: "v4",
      auth: this.authClientObject,
    });
  }

  async readData(range) {
    return await this.googleSheetsInstance.spreadsheets.values.get({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: `${this.nameSheet}!${range}`,
    });
  }

  async writeData(range, values) {
    return await this.googleSheetsInstance.spreadsheets.values.append({
      auth: this.auth,
      spreadsheetId: this.spreadsheetId,
      range: `${this.nameSheet}!${range}`,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: values,
      },
    });
  }
}

module.exports = GoogleSheetService;

const Unauthorized = require("../exceptions/Unauthorized");
const GoogleSheet = require("../services/GoogleSheet");

const { ID_SHEET } = require("../config");

async function getSheetQuestionConfig() {
  const sheet = new GoogleSheet(ID_SHEET, "configuracion");
  await sheet.init();
  const result = await sheet.readData("A:C");

  if (result) {
    const data = result.data.values;
    return {
      sheetQuestion: data[1][0],
      sheetAnswers: data[1][1],
      sheetPerson: data[1][2],
    };
  }
  throw new Error("Config sheet column empty");
}

async function validationPerson(dni) {
  const configSheet = await getSheetQuestionConfig();
  const sheet = new GoogleSheet(ID_SHEET, configSheet["sheetPerson"]);

  await sheet.init();

  const result = await sheet.readData("A:B");

  if (result) {
    const data = result.data.values;
    for (const person of data) {
      if (person[1] == dni) {
        return true;
      }
    }
  }
  throw new Unauthorized();
}

module.exports = {
  getSheetQuestionConfig,
  validationPerson,
};

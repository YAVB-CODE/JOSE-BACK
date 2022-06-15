const Response = require("../../models/Response");
const Request = require("../../models/Request");
const Question = require("../../models/Question");
const GoogleSheet = require("../../services/GoogleSheet");
const { getSheetQuestionConfig } = require("../../utils");
const { ID_SHEET } = require("../../config");

async function readQuestions(req, res) {
  const request = new Request(req);
  const response = new Response(res);
  try {
    const configSheet = await getSheetQuestionConfig();

    const sheet = new GoogleSheet(ID_SHEET, configSheet["sheetQuestion"]);
    await sheet.init();
    const result = await sheet.readData("A2:C");
    const questions = new Question(result?.data?.values || []);
    const dataQuestion = questions.build();
    return response.format(200, dataQuestion);
  } catch (error) {
    return response.handleException(error);
  }
}

module.exports = readQuestions;

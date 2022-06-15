const Response = require("../../models/Response");
const Request = require("../../models/Request");
const Answer = require("../../models/Answer");
const GoogleSheet = require("../../services/GoogleSheet");
const { getSheetQuestionConfig } = require("../../utils");
const { ID_SHEET } = require("../../config");

async function answersQuestion(req, res) {
  const request = new Request(req);
  const response = new Response(res);
  try {
    const answer = new Answer(request.getBody());
    const dataValues = answer.build("Yunior");
    const configSheet = await getSheetQuestionConfig();

    const sheet = new GoogleSheet(ID_SHEET, configSheet["sheetAnswers"]);
    await sheet.init();
    await sheet.writeData("A:C", dataValues);

    return response.format(200, dataValues);
  } catch (error) {
    return response.handleException(error);
  }
}

module.exports = answersQuestion;

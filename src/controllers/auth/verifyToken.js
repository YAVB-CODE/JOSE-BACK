const Auth = require("../../models/Auth");
const Request = require("../../models/Request");
const Response = require("../../models/Response");

function verifyToken(req, res) {
  const request = new Request(req);
  const response = new Response(res);
  try {
    const token = request.getHeaders()["token"];
    const decodeToken = Auth.decodeOrValidateToken(token);
    return response.format(200, { decodeToken });
  } catch (error) {
    return response.handleException(error);
  }
}
module.exports = verifyToken;

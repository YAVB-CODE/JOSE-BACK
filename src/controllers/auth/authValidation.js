const Auth = require("../../models/Auth");
const Response = require("../../models/Response");
const Request = require("../../models/Request");
const { validationPerson } = require("../../utils");

async function authValidation(req, res) {
  const request = new Request(req);
  const response = new Response(res);
  try {
    const { fullName, dni, area } = request.getBody();

    await validationPerson(dni);

    const auth = new Auth({ fullName, dni, area });
    const tokenGenerated = auth.createToken();
    
    return response.format(200, { token: tokenGenerated });
  } catch (error) {
    return response.handleException(error);
  }
}

module.exports = authValidation;

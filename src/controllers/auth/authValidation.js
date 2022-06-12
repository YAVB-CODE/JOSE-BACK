const Auth = require("../../models/Auth");

function authValidation(req, res) {
  try {
    const { fullName, dni, area } = req.body;

    const auth = new Auth({ fullName, dni, area });

    const tokenGenerated = auth.createToken();

    return res.status(200).json({ token: tokenGenerated });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
}

module.exports = authValidation;

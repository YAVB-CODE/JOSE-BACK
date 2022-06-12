const Auth = require("../../models/Auth");

function verifyToken(req, res) {
  try {
    const token = req.headers["token"];

    Auth.decodeOrValidateToken(token);

    return res.status(200).json({ message: "valid" });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
}
module.exports = verifyToken;

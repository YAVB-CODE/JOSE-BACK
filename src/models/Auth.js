const JWT = require("jsonwebtoken");
const config = require("../config");
const TokenInvalidException = require("../exceptions/TokenInvalid");

class Auth {
  constructor(props) {
    this.props = props;
  }

  createToken() {
    return JWT.sign(this.props, config.KEY_SECRET_TOKEN, { expiresIn: "1h" });
  }

  static decodeOrValidateToken(token) {
    JWT.verify(token, config.KEY_SECRET_TOKEN, (error, decode) => {
      if (error) throw new TokenInvalidException();
      return decode;
    });
  }
}

module.exports = Auth;

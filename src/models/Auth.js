const JWT = require("jsonwebtoken");
const config = require("../config");
const Unauthorized = require("../exceptions/Unauthorized");

class Auth {
  constructor(props) {
    this.props = props;
  }

  createToken() {
    return JWT.sign(this.props, config.KEY_SECRET_TOKEN, { expiresIn: "1h" });
  }

  static decodeOrValidateToken(token) {
    let decodeToken = {};
    JWT.verify(token, config.KEY_SECRET_TOKEN, (error, decode) => {
      if (error) throw new Unauthorized();
      decodeToken = decode;
    });

    return decodeToken;
  }
}

module.exports = Auth;

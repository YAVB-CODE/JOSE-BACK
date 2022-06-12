class TokenInvalid extends Error {
  constructor() {
    super("Token Invalid");
    this.code = 401;
  }
}

module.exports = TokenInvalid;

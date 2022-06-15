class Unauthorized extends Error {
  constructor() {
    super("Unauthorized");
    this.code = 401;
  }
}

module.exports = Unauthorized;

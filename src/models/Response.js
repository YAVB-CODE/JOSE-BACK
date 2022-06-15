const Unauthorized = require("../exceptions/Unauthorized");

class Response {
  constructor(response) {
    this.response = response;
  }

  format(status, body) {
    return this.response.status(status).json(body);
  }

  handleException(error) {
    let code = 500;
    let message = "Error server internal";
    switch (error.constructor) {
      case Unauthorized:
        code = error.code;
        message = error.message;
        break;
    }

    return this.response.status(code).json({ message });
  }
}

module.exports = Response;

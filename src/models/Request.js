class Request {
  constructor(request) {
    this.request = request;
  }

  getBody() {
    return this.request.body;
  }

  getHeaders() {
    return this.request.headers;
  }
}

module.exports = Request;

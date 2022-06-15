class Answer {
  constructor(data) {
    this.data = data;
  }

  build(user) {
    const arrayAnswers = [];

    for (const answerObject of this.data) {
      for (const answerItem of answerObject.answers) {
        arrayAnswers.push([user, answerObject.question, answerItem]);
      }
    }

    return arrayAnswers;
  }
}

module.exports = Answer;

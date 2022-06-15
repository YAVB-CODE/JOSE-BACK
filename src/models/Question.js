class Question {
  constructor(data) {
    this.data = data;
  }

  build() {
    const objectQuestions = {};

    for (const row of this.data) {
      if (!objectQuestions[row[0]]) {
        objectQuestions[row[0]] = {
          area: "",
          question: [],
          numberAlternatives: 0,
        };
      }

      objectQuestions[row[0]].area = row[0];
      objectQuestions[row[0]].question.push(row[1]);
      objectQuestions[row[0]].numberAlternatives = row[2];
    }

    const arrayQuestion = [];

    for (const key in objectQuestions) {
      arrayQuestion.push(objectQuestions[key]);
    }

    return arrayQuestion;
  }
}

module.exports = Question;

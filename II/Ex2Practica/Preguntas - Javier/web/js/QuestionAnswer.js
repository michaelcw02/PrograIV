// funcion QuestionAnswer
function QuestionAnswer(idQuestion, idAnswer) {
  this.QuestionAnswer(idQuestion, idAnswer);
}

// prototype asociado a la funcion QuestionAnswer
// solo metodos
QuestionAnswer.prototype = {
  QuestionAnswer: function (idQuestion, idAnswer) {
    this.idQuestion = idQuestion;
    this.idAnswer = idAnswer;
  },
  completo: function () { return this.idQuestion + ' ' + this.idAnswer; },
}
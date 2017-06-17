// funcion UserQuestion
function UserQuestion(idUser, idQuestion, idAnswer) {
  this.UserQuestion(idUser, idQuestion, idAnswer);
}

// prototype asociado a la funcion UserQuestion
// solo metodos
UserQuestion.prototype = {
  UserQuestion: function (idUser, idQuestion, idAnswer) {
    this.idUser = idUser;
    this.idQuestion = idQuestion;
    this.idAnswer = idAnswer;
  },
  completo: function () { return this.idUser + ' ' + this.idQuestion + ' ' + this.idAnswer; },
}
// funcion Answer
function Answer(id, answername, idQuestion) {
  this.Answer(id, answername, idQuestion);
}

// prototype asociado a la funcion Answer
// solo metodos
Answer.prototype = {
  Answer: function (id, answername, idQuestion) {
    this.id = id;
    this.answername = answername;
    this.idQuestion = idQuestion;
  },
  completo: function () { return this.id + ' ' + this.answername + ' ' + this.idQuestion; },
}


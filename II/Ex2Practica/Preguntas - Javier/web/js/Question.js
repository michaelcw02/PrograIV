// funcion Question
function Question(id, questionname, topic) {
  this.Question(id, questionname, topic);
}

// prototype asociado a la funcion Question
// solo metodos
Question.prototype = {
  Question: function (id, questionname, topic) {
    this.id = id;
    this.questionname = questionname;
    this.topic = topic;
  },
  completo: function () { return this.id + ' ' + this.questionname + ' ' + this.topic; },
}


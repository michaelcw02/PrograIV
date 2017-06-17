var JsonUtils = JsonUtils || {};
JsonUtils.store=function (id, carrito){
	sessionStorage.setItem(id, JSON.stringify(carrito,replacer));
};

JsonUtils.revive = function (k, v) {
    if (v instanceof Object && v._class == 'Question') {
        return new Question(v.id, v.questionname, v.topic);
    }
   if (v instanceof Object && v._class == 'Usuario') {
       return new Usuario(v.id, v.clave, v.tipo);
    }   
    if (v instanceof Object && v._class == 'Answer') {
       return new Answer(v.id, v.answername, v.idQuestion);
    }   
    if (v instanceof Object && v._class == 'UserQuestion') {
       return new UserQuestion(v.idUser, v.idQuestion, v.idAnswer);
    }   
    if (v instanceof Object && v._class == 'QuestionAnswer') {
       return new QuestionAnswer(v.idQuestion, v.idAnswer);
    }   
    return v;
};
JsonUtils.replacer = function (k, v) {
    if (v instanceof Question) {
        v._class = "Question";
    }
    if (v instanceof Answer) {
        v._class = "Answer";
    }
    if (v instanceof Usuario) {
            v._class = "Usuario";
    }
    if (v instanceof UserQuestion) {
            v._class = "UserQuestion";
    }
    if (v instanceof QuestionAnswer) {
            v._class = "QuestionAnswer";
    }
    return v;
};




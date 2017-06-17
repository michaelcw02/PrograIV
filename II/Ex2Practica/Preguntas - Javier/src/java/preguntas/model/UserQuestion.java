/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package preguntas.model;

/**
 *
 * @author javie
 */
public class UserQuestion implements Jsonable{
public UserQuestion() {
        this.idUser = null;
        this.idQuestion = null;
        this.idAnswer = null;
    }
    public UserQuestion(Usuario idUser, Question idQuestion, Answer idAnswer) {
        this.idUser = idUser;
        this.idQuestion = idQuestion;
        this.idAnswer = idAnswer;
    }

    public Usuario getIdUser() {
        return idUser;
    }

    public void setIdUser(Usuario idUser) {
        this.idUser = idUser;
    }

    public Question getIdQuestion() {
        return idQuestion;
    }

    public void setIdQuestion(Question idQuestion) {
        this.idQuestion = idQuestion;
    }

    public Answer getIdAnswer() {
        return idAnswer;
    }

    public void setIdAnswer(Answer idAnswer) {
        this.idAnswer = idAnswer;
    }

    @Override
    public String toString() {
        return "UserQuestion{" + "idUser=" + idUser + ", idQuestion=" + idQuestion + ", idAnswer=" + idAnswer + '}';
    }
    
    //ATRIBUTOS
    private Usuario idUser;
    private Question idQuestion;
    private Answer idAnswer;
}

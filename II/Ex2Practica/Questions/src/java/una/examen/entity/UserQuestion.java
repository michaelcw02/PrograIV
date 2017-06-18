/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.examen.entity;

/**
 *
 * @author michaelcw02
 */
public class UserQuestion {
    private UserQuestionID  userQuestionID;
    private Usuario         usuario;
    private Question        question;
    private Answer          answer;

    public UserQuestion(UserQuestionID userQuestionID, Usuario usuario, Question question, Answer answer) {
        this.userQuestionID = userQuestionID;
        this.usuario = usuario;
        this.question = question;
        this.answer = answer;
    }

    public UserQuestionID getUserQuestionID() {
        return userQuestionID;
    }

    public void setUserQuestionID(UserQuestionID userQuestionID) {
        this.userQuestionID = userQuestionID;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Answer getAnswer() {
        return answer;
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
    }
    
    
    
}

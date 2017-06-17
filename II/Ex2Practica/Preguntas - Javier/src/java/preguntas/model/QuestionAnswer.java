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
public class QuestionAnswer implements Jsonable {
  public QuestionAnswer() {
        this.idQuestion = null;
        this.idAnswer = null;
    }
    public QuestionAnswer(Question idQuestion, Answer idAnswer) {
        this.idQuestion = idQuestion;
        this.idAnswer = idAnswer;
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
        return "QuestionAnswer{" + "idQuestion=" + idQuestion + ", idAnswer=" + idAnswer + '}';
    }
    
    
    //ATRIBUTOS
    private Question idQuestion;
    private Answer idAnswer;
}

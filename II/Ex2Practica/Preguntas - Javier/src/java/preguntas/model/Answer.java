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
public class Answer implements Jsonable{
   public Answer() {
        this.id = 0;
        this.answername = "";
        this.idQuestion = null;
    }
    public Answer(int id, String answername, Question idQuestion) {
        this.id = id;
        this.answername = answername;
        this.idQuestion = idQuestion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAnswername() {
        return answername;
    }

    public void setAnswername(String answername) {
        this.answername = answername;
    }

    public Question getIdQuestion() {
        return idQuestion;
    }

    public void setIdQuestion(Question idQuestion) {
        this.idQuestion = idQuestion;
    }

    @Override
    public String toString() {
        return "Answer{" + "id=" + id + ", answername=" + answername + ", idQuestion=" + idQuestion + '}';
    }
    
    
    //ATRIBUTOS
    private int id;
    private String answername;
    private Question idQuestion;
}

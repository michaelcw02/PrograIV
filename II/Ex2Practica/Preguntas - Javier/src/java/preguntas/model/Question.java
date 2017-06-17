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
public class Question implements Jsonable {
   public Question() {
        this.id = 0;
        this.questionname = "";
        this.topic = "";
    }
    public Question(int id, String questionname, String topic) {
        this.id = id;
        this.questionname = questionname;
        this.topic = topic;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestionname() {
        return questionname;
    }

    public void setQuestionname(String questionname) {
        this.questionname = questionname;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    @Override
    public String toString() {
        return "Question{" + "id=" + id + ", questionname=" + questionname + ", topic=" + topic + '}';
    }
    
    //ATRIBUTOS
    private int id;
    private String questionname;
    private String topic;
    
    
}

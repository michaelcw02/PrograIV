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
public class Question {
    private int id;
    private String questionName;
    private String topic;

    public Question(int id, String questionName, String topic) {
        this.id = id;
        this.questionName = questionName;
        this.topic = topic;
    }

    public Question() {
        this.id = -1;
        this.questionName = "";
        this.topic = "";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestionName() {
        return questionName;
    }

    public void setQuestionName(String questionName) {
        this.questionName = questionName;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }
    
}

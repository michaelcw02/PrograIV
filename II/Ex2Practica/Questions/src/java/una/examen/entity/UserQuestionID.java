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
public class UserQuestionID {
    private String  idUser;
    private int     idQuestion;

    public UserQuestionID(String idUser, int idQuestion) {
        this.idUser = idUser;
        this.idQuestion = idQuestion;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }

    public int getIdQuestion() {
        return idQuestion;
    }

    public void setIdQuestion(int idQuestion) {
        this.idQuestion = idQuestion;
    }
    
}

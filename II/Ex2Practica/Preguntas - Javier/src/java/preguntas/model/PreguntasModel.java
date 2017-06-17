/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package preguntas.model;

import java.util.List;
import preguntas.data.Dao;

/**
 *
 * @author javie
 */
public class PreguntasModel {
     Dao dao=new Dao();
      List<Question> questions  = this.getQuestions();
     List<QuestionAnswer> questionsAnswers  = this.getQuestionAnswers();
      
    public List<Question> getQuestions(){
        return dao.getQuestions();
    }
    public List<QuestionAnswer> getQuestionAnswers(){
        return dao.getQuestionAnswers();
    }
     public List<Question> getPreguntasBuscadas(String topic , String idUsuario){
        return dao.getPreguntasBuscadas(topic, idUsuario);
    }
         public List<Answer> getAnswers(int idPregunta){
        return dao.getAnswers(idPregunta);
    }
   public int addUserQuestion(UserQuestion uq) throws Exception{
    return dao.addUserQuestion(uq);
}
   public boolean respuestaCorrecta(UserQuestion uq){
       for(QuestionAnswer qa: this.getQuestionAnswers()){
           if(qa.getIdQuestion().getId() == uq.getIdQuestion().getId()){
               return qa.getIdAnswer().getId() == uq.getIdAnswer().getId();
           }
       }
       return false;
   }
   public Usuario userLogin(Usuario usuario) throws Exception{
       return dao.userLogin(usuario);
    }
}

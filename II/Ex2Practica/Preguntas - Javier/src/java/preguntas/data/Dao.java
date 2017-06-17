/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package preguntas.data;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import preguntas.model.Answer;
import preguntas.model.Question;
import preguntas.model.QuestionAnswer;
import preguntas.model.UserQuestion;
import preguntas.model.Usuario;

public class Dao {
    static ConexionDataBase db;
    static  SimpleDateFormat dateFormater;
    public Dao() {
        db= new ConexionDataBase();
        dateFormater = new SimpleDateFormat("dd/MM/yyyy");
    }
    
    public List<Question> getQuestions(){
        List<Question> resultado = new ArrayList();
        try {
            String sql="select * from Question";
            ResultSet rs =  db.executeQuery(sql);
            while (rs.next()) {
                resultado.add(question(rs));
            }
        } catch (SQLException ex) { System.out.print("error question w"); }
        return resultado;
       }
    
      private Question question(ResultSet rs){
        try {
            Question q= new Question();
            q.setId(rs.getInt("id"));
            q.setQuestionname(rs.getString("questionname"));
            q.setTopic(rs.getString("topic"));
            return q;
        } catch (SQLException ex) {
            System.out.print("error question s");
            return null;
        }
    }
    public List<Question> getPreguntasBuscadas(String topic, String idUsuario){
        List<Question> resultado = new ArrayList();
        try {
            String sql="select * from Question where topic like '%%%s%%' and id not in \n" +
"(select Q.id as idQ from UserQuestion, question Q where UserQuestion.idQuestion = Q.id and UserQuestion.idUser = '%s');";
             sql=String.format(sql,topic, idUsuario);
            ResultSet rs =  db.executeQuery(sql);
            while (rs.next()) {
                resultado.add(question(rs));
            }
        } catch (SQLException ex) { System.out.print("error question w"); }
        return resultado;
       }
     public List<Answer> getAnswers(int idPregunta){
        List<Answer> resultado = new ArrayList();
        try {
            String sql="select a.id, a.answername,  Q.id as idQ,Q.questionname as questionnameQ,Q.topic as topicQ\n" +
                        "from answer a,question Q\n" +
                        "where a.idQuestion= Q.id and Q.id = %d;";
             sql=String.format(sql,idPregunta);
            ResultSet rs =  db.executeQuery(sql);
            while (rs.next()) {
                resultado.add(answer(rs));
            }
        } catch (SQLException ex) { System.out.print("error question w"); }
        return resultado;
       }
     private Answer answer(ResultSet rs){
        try {
            Answer a= new Answer();
            a.setId(rs.getInt("id"));
            a.setAnswername(rs.getString("answername"));
            a.setIdQuestion(question2(rs));
            return a;
        } catch (SQLException ex) {
            System.out.print("error avion s");
            return null;
        }
    }    
    public List<QuestionAnswer> getQuestionAnswers(){
        List<QuestionAnswer> resultado = new ArrayList();
        try {
              String sql ="select Q.id as idQ,Q.questionname as questionnameQ,Q.topic as topicQ,\n" +
"A.id as idA,A.answername as answernameA, \n" +
"AQ.id as idAQ, AQ.questionname as questionnameAQ, AQ.topic as topicAQ \n" +
"from QuestionAnswer, question Q, answer A, question AQ \n" +
"where QuestionAnswer.idQuestion=Q.id and QuestionAnswer.idAnswer=A.id and A.idQuestion = AQ.id;";
            ResultSet rs =  db.executeQuery(sql);
            while (rs.next()) {
                resultado.add(questionAnswer(rs));
            }
        } catch (SQLException ex) { System.out.print("error questionAnser w"); }
        return resultado;
       }
     private QuestionAnswer questionAnswer(ResultSet rs){
         QuestionAnswer qa= new QuestionAnswer();
         qa.setIdQuestion(question2(rs));
         qa.setIdAnswer(answer2(rs));
         return qa;
    }    
     private Question question2(ResultSet rs){
        try {
            Question q= new Question();
            q.setId(rs.getInt("idQ"));
            q.setQuestionname(rs.getString("questionnameQ"));
            q.setTopic(rs.getString("topicQ"));
            return q;
        } catch (SQLException ex) {
            System.out.print("error question s");
            return null;
        }
    }
     private Question question3(ResultSet rs){
        try {
            Question q= new Question();
            q.setId(rs.getInt("idAQ"));
            q.setQuestionname(rs.getString("questionnameAQ"));
            q.setTopic(rs.getString("topicAQ"));
            return q;
        } catch (SQLException ex) {
            System.out.print("error question s");
            return null;
        }
    }
     private Answer answer2(ResultSet rs){
        try {
            Answer a= new Answer();
            a.setId(rs.getInt("idA"));
            a.setAnswername(rs.getString("answernameA"));
            a.setIdQuestion(question3(rs));
            return a;
        } catch (SQLException ex) {
            System.out.print("error avion s");
            return null;
        }
    }    
     public int addUserQuestion (UserQuestion uq) throws Exception {
           String sql = "insert into UserQuestion (idUser, idQuestion, idAnswer) "
                   + "values('%s',%d,%d)";
           sql = String.format(sql, uq.getIdUser().getId(), uq.getIdQuestion().getId(), uq.getIdAnswer().getId());
           int count = db.executeUpdate(sql);
           return count;
    }
    
    
  public static Usuario userLogin(Usuario usuario) throws Exception{
        try {
            String sql="select * from "+
                    "Usuario  u  "+
                    "where u.id = '%s' and u.clave='%s'";
            sql=String.format(sql,usuario.getId(),usuario.getClave());
            ResultSet rs =  db.executeQuery(sql);
            if (rs.next()) {
                return user(rs);
            }
            else{
                return new Usuario(usuario.getId(),usuario.getClave(),0);
            }
        } catch (SQLException ex) {
        }
        return null;
   }
   private static Usuario user(ResultSet rs) throws Exception{
        Usuario obj= new Usuario();
        obj.setId(rs.getString("id"));
        obj.setClave(rs.getString("clave"));
        obj.setTipo(rs.getInt("tipo"));
        return obj;
    }
}




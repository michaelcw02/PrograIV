/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package preguntas.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import preguntas.model.Answer;
import preguntas.model.PreguntasModel;
import preguntas.model.Jsonable;
import preguntas.model.Question;
import preguntas.model.QuestionAnswer;
import preguntas.model.UserQuestion;
import preguntas.model.Usuario;




/**
 *
 * @author jdveg
 */
@WebServlet(name = "PreguntasService", urlPatterns = {"/PreguntasService"})
public class PreguntasService extends HttpServlet {
    PreguntasModel model;
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
           response.setContentType("text/xml");
           RuntimeTypeAdapterFactory<Jsonable> rta;
            rta = RuntimeTypeAdapterFactory.of(Jsonable.class,"_class")
                    .registerSubtype(Question.class,"Question")
                     .registerSubtype(Answer.class,"Answer")
                    .registerSubtype(UserQuestion.class,"UserQuestion")
                    .registerSubtype(QuestionAnswer.class,"QuestionAnswer")
                    .registerSubtype(Usuario.class,"Usuario");
           Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/MM/yyyy").create();
           String json;
           int inserted;
           
           String accion = request.getParameter("action");
           System.out.println(accion);
           List<Question> questions;
           List<QuestionAnswer> questionsAnswers;
           List<Question> preguntasBuscadas;
           List<Answer> answers;
           Usuario usuario;
           switch (accion){
               case "cargarPreguntas":
                   questions = model.getQuestions();
                   json = gson.toJson(questions);
                   out.write(json);
               break;
                case "cargarRespuestasCorrectas":
                   questionsAnswers = model.getQuestionAnswers();
                   json = gson.toJson(questionsAnswers);
                   out.write(json);
               break;
                 case "buscarPreguntas":
                   String topicPregunta = request.getParameter("topic");
                   String idUsuario = request.getParameter("idUsuario");
                   preguntasBuscadas = model.getPreguntasBuscadas(topicPregunta, idUsuario);
                   json = gson.toJson(preguntasBuscadas);
                   out.write(json);
                   break;
                    case "cargarRespuestas":
                   String idPregunta = request.getParameter("idPregunta");
                   answers = model.getAnswers(Integer.parseInt(idPregunta));
                   json = gson.toJson(answers);
                   out.write(json);
                   break;
                    case "contestarPregunta":
                   json = request.getParameter("userQuestion");
                   UserQuestion uq= gson.fromJson(json,UserQuestion.class);
                   System.out.println(uq);
                   inserted = model.addUserQuestion(uq); 
                   String notificacion ="";
                   if(inserted == 1 ){
                       if(model.respuestaCorrecta(uq)){
                           notificacion = "Correcto";
                       }
                       else{
                           notificacion = "Incorrecto";
                       }
                   } else {
                       notificacion = "Respuesta no se pudo registrar";
                   }
                   out.write(notificacion);
                   break;
                case "userLogin":
                    json = request.getParameter("user");
                    Usuario user= gson.fromJson(json, Usuario.class);
                    user=model.userLogin(user);
                    if (user.getTipo()!=0){
                        request.getSession().setAttribute("user", user);
                        switch(user.getTipo()){
                            case 1: // client
                                break;
                            case 2: // manager
                                break;
                        }
                    }
                    json = gson.toJson(user); 
                    out.write(json);
                    break;
                      case "userLogout":
                        request.getSession().removeAttribute("user");
                        request.getSession().invalidate();
                    break;
                  case "getUser":
                    Usuario u = (Usuario)request.getSession().getAttribute("user");
                    json = gson.toJson(u); 
                    out.write(json);
                    break;
           }
        } catch (Exception ex) {
            Logger.getLogger(PreguntasService.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    @Override
    public void init() throws ServletException{
        super.init();
        model = new PreguntasModel();
    }
}

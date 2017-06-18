/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.examen.bl;

import java.util.List;
import una.examen.dao.QuestionDAO;
import una.examen.entity.Question;

/**
 *
 * @author michaelcw02
 */
public class QuestionBL {
    
    QuestionDAO questionDAO;
    
    public QuestionBL () {
        this.questionDAO = new QuestionDAO();
    }
    
    public List<Question> findByTopicLike(String topic) {
        return this.questionDAO.findByTopicLike(topic);
    }
}

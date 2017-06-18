/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.examen.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import una.examen.entity.Question;
/**
 *
 * @author michaelcw02
 */
public class QuestionDAO extends BaseDAO{
    public QuestionDAO() {
        super();
    }
    
    public List<Question> findByTopicLike(String topic) {
        LinkedList<Question> list = new LinkedList<>();
        try {
            String query = "SELECT * FROM questions.QUESTION WHERE TOPIC LIKE ?;";
            PreparedStatement pstmt = connection.prepareStatement(query);
            pstmt.setString(1, "%" + topic + "%");
            ResultSet rs = pstmt.executeQuery();
            while(rs.next()) {
                list.add(question(rs));
            }
            return list;
        } catch (SQLException ex) {
            System.out.println("An exception have occurred in usuario dao");
            System.out.println(ex);
            return null;
        }
    }
}

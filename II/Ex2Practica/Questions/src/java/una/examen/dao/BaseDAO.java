/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.examen.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import una.examen.database.Database;
import una.examen.entity.Question;
import una.examen.entity.Usuario;

/**
 *
 * @author michaelcw02
 */
public class BaseDAO {
    protected Database connection;
    
    protected BaseDAO() {
        connection = new Database(null, null, null);
    }
    
    protected PreparedStatement prepareStatement(String query) throws SQLException {
        return connection.prepareStatement(query);
    }

    protected Usuario usuario(ResultSet rs) {
        try {
            String  id      = rs.getString("id");
            String  clave   = rs.getString("clave");
            int     tipo    = rs.getInt("tipo");
            Usuario user    = new Usuario(id, clave, tipo);
            return user;
        } catch (SQLException ex) {
            System.out.println("An exception have occurred in usuario rs");
            System.out.println(ex);
            return null;
        }
    }

    protected Question question(ResultSet rs) {
        try {
            int     id          = rs.getInt("id");
            String  questionName= rs.getString("questionname");
            String  topic       = rs.getString("topic");
            Question question    = new Question(id, questionName, topic);
            return question;
        } catch (SQLException ex) {
            System.out.println("An exception have occurred in usuario rs");
            System.out.println(ex);
            return null;
        }
    }
    
    
}

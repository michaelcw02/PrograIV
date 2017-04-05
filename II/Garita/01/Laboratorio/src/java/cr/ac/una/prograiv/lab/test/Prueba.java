/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.lab.test;

import cr.ac.una.prograiv.lab.dao.PersonasDAO;
import cr.ac.una.prograiv.lab.dominio.Personas;
import java.util.Date;

/**
 *
 * @author Estudiante
 */
public class Prueba {
    
    public static void main(String []arg) {
        Personas p = new Personas(1111, "Michael", "Chen W.", new Date());
        PersonasDAO pDao = new PersonasDAO(); 
        pDao.save(p);
    }
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.bl;

import cr.ac.una.prograiv.lab.dao.IBaseDAO;
import cr.ac.una.prograiv.lab.dao.PersonasDAO;
import java.util.LinkedHashMap;
import java.util.List;

/**
 *
 * @author Estudiante
 */
public class BaseBL {

    public BaseBL() {
        daos = new LinkedHashMap();
        daos.put("cr.ac.una.prograiv.agenda.domain.Personas", new PersonasDAO());
    }
    
    public IBaseDAO getDao(String className) {
        return daos.get(className); 
    }
        
    private final LinkedHashMap<String, IBaseDAO> daos;
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.lab.dao;

import cr.ac.una.prograiv.lab.dominio.Personas;
import cr.ac.una.prograiv.lab.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Estudiante
 */
public class PersonasDAO extends HibernateUtil implements IBaseDAO<Personas, Integer>{

    @Override
    public void save(Personas o) {
        try {
            iniciarOperacion();
            getSesion().save(o);
            getTransac().commit();
        } 
        catch (HibernateException he) {
            manejarException(he);
            throw he;
        }
        finally {
            getSesion().close();
        }
    }

    @Override
    public Personas merge(Personas o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void delete(Personas o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Personas findById(Integer key) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Personas> findAll() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}

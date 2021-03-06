/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.agenda.bl;

import cr.ac.una.prograiv.lab.dominio.Personas;
import java.util.List;

/**
 *
 * @author Estudiante
 */
public class PersonasBL extends BaseBL implements IBaseBL<Personas, Integer>{

    public PersonasBL() {
        super();
    }
    
    @Override
    public void save(Personas o) {
        if(this.findById(o.getPkCedula()) == null)
            this.getDao(o.getClass().getName()).save(o);
        else {
            System.out.print("Error, la persona ya existe");
        }
    }

    @Override
    public Personas merge(Personas o) {
        return (Personas) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Personas o) {
        /*
        
        
        */
    }

    @Override
    public Personas findById(Integer o) {
        return (Personas) this.getDao(Personas.class.getName()).findById(o);
    }

    @Override
    public List<Personas> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}

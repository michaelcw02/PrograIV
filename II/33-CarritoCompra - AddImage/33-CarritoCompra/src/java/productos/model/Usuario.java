/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package productos.model;

import java.io.Serializable;

/**
 *
 * @author jsanchez
 */
public class Usuario implements Serializable, Jsonable{
    
    String id;
    String clave;
    int tipo;
    
    public int getTipo(){
        return tipo;
    }

    public String getId() {
        return id;
    }

    public String getClave() {
        return clave;
    }

    public Usuario(String id, String clave, int tipo) {
        this.id = id;
        this.clave = clave;
        this.tipo = tipo;
    }

    public Usuario() {
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }
    
}

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
public class Cliente implements Serializable, Jsonable{
 String id;
 String nombre;
 String correo;
 String direccion_envio;
 String telefono;

    public Cliente(String id, String nombre, String correo, String direccion_envio, String telefono) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.direccion_envio = direccion_envio;
        this.telefono = telefono;
    }

    public Cliente() {
    }

    public String getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public String getDireccion_envio() {
        return direccion_envio;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public void setDireccion_envio(String direccion_envio) {
        this.direccion_envio = direccion_envio;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
 
 
}

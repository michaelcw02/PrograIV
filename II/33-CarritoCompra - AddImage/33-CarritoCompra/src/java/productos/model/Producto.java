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
public class Producto implements Serializable, Jsonable{
    String codigo;
    String descripcion;
    int precio;

   public Producto(){
       this("","",0);
   }
   
   public Producto(String codigo, String descripcion, int precio){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.precio=precio;
   }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }
   
}

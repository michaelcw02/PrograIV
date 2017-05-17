/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package productos.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
}

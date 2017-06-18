/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.examen.test;

import una.examen.bl.UsuarioBL;
import una.examen.entity.Usuario;

/**
 *
 * @author michaelcw02
 */
public class Test {
    
    public static void main(String[] arg) throws Exception {
        UsuarioBL usuarioBL = new UsuarioBL();
        Usuario usuario = new Usuario(); 
        usuario = usuarioBL.findByIdNPass("guest", "guest");
        System.out.println("End");
        
    }
    
}

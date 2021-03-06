package cr.ac.una.prograiv.lab.dominio;
// Generated 04-abr-2017 19:18:03 by Hibernate Tools 4.3.1


import java.util.Date;

/**
 * Direcciones generated by hbm2java
 */
public class Direcciones  implements java.io.Serializable {


     private Integer pkIdDireccion;
     private Personas personas;
     private String nomLugar;
     private String direccion;
     private String ultUsuario;
     private Date ultModificacion;

    public Direcciones() {
    }

	
    public Direcciones(Personas personas, String nomLugar, String direccion) {
        this.personas = personas;
        this.nomLugar = nomLugar;
        this.direccion = direccion;
    }
    public Direcciones(Personas personas, String nomLugar, String direccion, String ultUsuario, Date ultModificacion) {
       this.personas = personas;
       this.nomLugar = nomLugar;
       this.direccion = direccion;
       this.ultUsuario = ultUsuario;
       this.ultModificacion = ultModificacion;
    }
   
    public Integer getPkIdDireccion() {
        return this.pkIdDireccion;
    }
    
    public void setPkIdDireccion(Integer pkIdDireccion) {
        this.pkIdDireccion = pkIdDireccion;
    }
    public Personas getPersonas() {
        return this.personas;
    }
    
    public void setPersonas(Personas personas) {
        this.personas = personas;
    }
    public String getNomLugar() {
        return this.nomLugar;
    }
    
    public void setNomLugar(String nomLugar) {
        this.nomLugar = nomLugar;
    }
    public String getDireccion() {
        return this.direccion;
    }
    
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getUltUsuario() {
        return this.ultUsuario;
    }
    
    public void setUltUsuario(String ultUsuario) {
        this.ultUsuario = ultUsuario;
    }
    public Date getUltModificacion() {
        return this.ultModificacion;
    }
    
    public void setUltModificacion(Date ultModificacion) {
        this.ultModificacion = ultModificacion;
    }




}



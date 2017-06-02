/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package productos.model;

import java.io.Serializable;
import java.sql.Date;

/**
 *
 * @author jsanchez
 */
public class Compra implements Serializable, Jsonable{
 Cliente cliente;
 int numero;
 Date fecha;
 String direccion_envio;
 float total;
 String tarjeta;
 Date vencimiento; 

    public Compra(Cliente cliente, int numero, Date fecha, String direccion_envio, float total, String tarjeta, Date vencimiento) {
        this.cliente = cliente;
        this.numero = numero;
        this.fecha = fecha;
        this.direccion_envio = direccion_envio;
        this.total = total;
        this.tarjeta = tarjeta;
        this.vencimiento = vencimiento;
    }

    public Compra() {
    }

    public Cliente getCliente() {
        return cliente;
    }

    public int getNumero() {
        return numero;
    }

    public Date getFecha() {
        return fecha;
    }

    public String getDireccion_envio() {
        return direccion_envio;
    }

    public float getTotal() {
        return total;
    }

    public String getTarjeta() {
        return tarjeta;
    }

    public Date getVencimiento() {
        return vencimiento;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public void setDireccion_envio(String direccion_envio) {
        this.direccion_envio = direccion_envio;
    }

    public void setTotal(float total) {
        this.total = total;
    }

    public void setTarjeta(String tarjeta) {
        this.tarjeta = tarjeta;
    }

    public void setVencimiento(Date vencimiento) {
        this.vencimiento = vencimiento;
    }
 
 
 
}

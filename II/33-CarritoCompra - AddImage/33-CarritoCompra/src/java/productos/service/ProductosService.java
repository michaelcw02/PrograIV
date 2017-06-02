/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package productos.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import productos.model.Cliente;
import productos.model.Compra;
import productos.model.Jsonable;
import productos.model.Model;
import productos.model.Producto;
import productos.model.Usuario;



/**
 *
 * @author jsanchez
 */
@WebServlet(name = "ProductosService", urlPatterns = {"/ProductosService"})
public class ProductosService extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, 
            HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            response.setContentType("text/xml");
            RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class,"_class")
             .registerSubtype(Usuario.class,"Usuario")
             .registerSubtype(Cliente.class,"Cliente")
             .registerSubtype(Producto.class,"Producto")
             .registerSubtype(Compra.class,"Compra");
            Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/MM/yyyy").create();
            String json;
            String accion = request.getParameter("action");
            List<Producto> products;
            Cliente client;
            switch (accion) {
                case "ProductListAll":
                    products = Model.productoConsultarTodos();
                    json = gson.toJson(products); 
                    out.write(json);
                    break;
                case "productListCategory":
                    int category;
                    category = Integer.parseInt(request.getParameter("category"));                    
                    products = Model.productListCategory(category);
                    json = gson.toJson(products); 
                    out.write(json);
                    break;
                case "ProductListSearch":
                    String criteria;
                    criteria = request.getParameter("criteria");
                    products = Model.ProductListSearch(criteria);
                    json = gson.toJson(products); 
                    out.write(json);
                    break;                    
                case "productDelete":
                    json = request.getParameter("product");
                    Producto productoJava= gson.fromJson(json, Producto.class);
                    Model.productDelete(productoJava);
                    break;
                case "userLogin":
                    json = request.getParameter("user");
                    Usuario user= gson.fromJson(json, Usuario.class);
                    user=Model.userLogin(user);
                    if (user.getTipo()!=0){
                        request.getSession().setAttribute("user", user);
                        switch(user.getTipo()){
                            case 1: // client
                                client = Model.clientGet(user.getId());
                                request.getSession().setAttribute("client", client);
                                break;
                            case 2: // manager
                                break;
                        }
                    }
                    json = gson.toJson(user); 
                    out.write(json);
                    break;
                case "userLogout":
                        request.getSession().removeAttribute("user");
                        request.getSession().invalidate();
                    break;

                case "clientGet":
                    client = (Cliente)request.getSession().getAttribute("client");
                    json = gson.toJson(client); 
                    out.write(json);
                    break;
                    
                case "PurchaseConfirm":
                    client = (Cliente)request.getSession().getAttribute("client");
                    String jsonCompra = request.getParameter("compra");
                    Compra compra = gson.fromJson(jsonCompra, Compra.class);
                    compra.setCliente(client);
                    compra.setFecha(new java.sql.Date(new java.util.Date().getTime()));
                    String jsonItmes = request.getParameter("items");
                    products= gson.fromJson(jsonItmes, new TypeToken<ArrayList<Producto>>(){}.getType());
                    int purchaseNumber=Model.purchaseConfirm(compra,products);
                    json = gson.toJson(purchaseNumber); 
                    out.write(json);
                    break;
                    
                case "PurchaseListAll":
                    List<Compra> purchs;
                    purchs = Model.compraConsultarTodos();
                    json = gson.toJson(purchs); 
                    out.write(json);
                    break;
                    
                case "ProductAdd":
                    json = request.getParameter("product");
                    Producto productAdd= gson.fromJson(json, Producto.class);
                    int inserted = Model.productAdd(productAdd); 
                    out.write((inserted==1)?"0":"1");
                    break;       
            }
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

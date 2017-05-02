<%-- 
    Document   : TelefonosJSP
    Created on : May 1, 2017, 11:48:29 PM
    Author     : michaelcw02
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Telefonos - Sistema para la administración de contáctos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

        <!-- ********************************************************** -->
        <!-- Includes para el datapicker -->
        <!-- ********************************************************** -->
        <link href="css/datetimepicker.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/datetimepicker.js" type="text/javascript"></script>

        <!-- ********************************************************** -->
        <!-- Estilos de la página -->
        <!-- ********************************************************** -->
        <link href="css/css.css" rel="stylesheet" type="text/css"/>

        <!-- ********************************************************** -->
        <!-- Script's de UTILERIAS -->
        <!-- ********************************************************** -->
        <script src="js/utils.js" type="text/javascript"></script>

        <!-- ********************************************************** -->
        <!-- Script's de TELEFONOS -->
        <!-- ********************************************************** -->
        <script src="js/TelefonosJS.js" type="text/javascript"></script>


    </head>
    <body>

        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar mensajes                  -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Modal Header</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <p>This is a small modal.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        

        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar el formulario de insertar -->
        <!-- o modificar
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <div class="modal fade" id="myModalFormulario" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insertar / Modificar Telefonos
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formTelefonos">
                            <div class="form-group" id="groupCedula">
                                <label for="cedula">Cedula:</label>
                                <input type="text" class="form-control" id="cedula" autofocus="true" placeholder="Cedula">
                            </div>

                            <div class="form-group" id="groupTelefono">
                                <label for="nombre">Telefono: </label>
                                <input type="text" class="form-control" id="telefono" placeholder="Telefono" >
                            </div>

                            <div class="form-group">
                                <label for="descripcion">Descripcion: </label>
                                <textarea class="form-control" rows="3" id="descripcion"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="hidden" value="agregarTelefono" id="telefonosAction"/>
                                <button type="submit" class="btn btn-primary" id="enviar">Guardar</button>
                                <button type="reset" class="btn btn-danger" id="cancelar">Cancelar</button>
                            </div>

                            <div class="form-group height25" >
                                <div class="alert alert-success hiddenDiv" id="mesajeResult">
                                    <strong id="mesajeResultNeg">Info!</strong> 
                                    <span id="mesajeResultText">This alert box could indicate a neutral informative change or action.</span>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->

        <div class="container">
            <div class="page-header">
                <h1>Agenda <small>Sistema para la administración de contáctos</small></h1>
            </div>

            <!-- ********************************************************** -->
            <!-- PANEL SUPERIOR -->
            <!-- ********************************************************** -->
            
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <!-- ********************************************************** -->
                        <!-- COLUMNA DEL MENU -->
                        <!-- ********************************************************** -->
                        <div class="col-md-12">
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Menú Principal
                                    <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a href="PersonasJSP.jsp">Mantenimiento Personas</a></li>
                                    <li><a href="#">Mantenimiento Teléfonos</a></li>
                                    <li><a href="#">Mantenimiento Direcciones</a></li>
                                    <li class="divider"></li>
                                    <li><a href="Logout">Cerrar Sesión</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ********************************************************** -->
            <!-- PANEL DEL MANTENIMIENTO DE PERSONAS -->
            <!-- ********************************************************** -->
            
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Mantenimiento de Teléfonos</h3></div>
                <div class="panel-body">
                    <center>
                        <button type="button" class="btn btn-primary centered"  id="btMostarForm">Insertar Teléfono</button>
                    </center><br>
                    <!-- ********************************************************** -->
                    <div class="col-sm-12">
                        <form role="form" onsubmit="return false;" id="formTelefonos" class="form-horizontal centered">
                            <div class="form-group" id="groupTelefono">
                                <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                    <p><b>Buscar por telefono de la persona:</b></p>
                                </div>
                                <div class="col-sm-4">
                                    <input type="telefono" class="form-control" id="buscarTelefono" placeholder="Digite el telefono de la persona">
                                </div>
                                <div class="col-sm-4">
                                    <button type="button" class="btn btn-info centered" data-toggle="modal" data-target="#myModalFormulario" id="btMostarForm">
                                        Buscar <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- ********************************************************** -->

                    <table class="table table-hover table-condensed" id="tablaTelefonos"></table>

                </div>
                <div class="panel-footer">Nota: Acciones validas dependeran del rol del usuario</div>
            </div>
        </div>


</html>

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    //Genera el datapicker

    //agrega los eventos las capas necesarias
    $("#enviar").click(function () {
        enviar();
    });

    //agrega los eventos las capas necesarias
    $("#cancelar").click(function () {
        limpiarForm();
        $("#myModalFormulario").modal("hide");
    });
    
    $("#btMostarForm").click(function () {
        limpiarForm();
        $("#myModalFormulario").modal("show");
    });
    
    
});

$(document).ready( function () {
    consultarTelefonos();
});

function consultarTelefonos() {
    mostrarModal("myModal", "Espere por favor..", "Consultando la información de telefonos en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'TelefonosServlet',
        data: {
            accion: "consultarTelefonos"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de los telefonos en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTabla(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            ocultarModal("myModal");
        },
        type: 'POST',
        dataType: "json"
    });
}

function dibujarTabla(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaTelefonos").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaPersonas").append(head); 
    row.append($("<th><b>CEDULA</b></th>"));
    row.append($("<th><b>TELEFONO</b></th>"));
    row.append($("<th><b>DESCRIPCION</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFila(dataJson[i]);
    }
}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona
    
    var row = $("<tr />");
    $("#tablaTelefonos").append(row); 
    row.append($("<td>" + rowData.pkFkCedula + "</td>"));
    row.append($("<td>" + rowData.pkTelefono + "</td>"));
    row.append($("<td>" + rowData.descripcion + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'modificar\');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminar\');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
}

function limpiarForm() {
    //setea el focus del formulario
    $('#cedula').focus();
    $("#cedula").removeAttr("readonly"); //elimina el atributo de solo lectura
    
    //se cambia la accion por agregarTelefono
    $("#telefonosAction").val("agregarTelefono"); 

    //esconde el div del mensaje
    mostrarMensaje("hiddenDiv", "", "");

    //Resetear el formulario
    $('#formTelefonos').trigger("reset");
}


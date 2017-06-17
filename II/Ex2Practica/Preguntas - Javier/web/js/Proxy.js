var Proxy = Proxy ||  {};

Proxy.cargarPreguntas = function(callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/Preguntas/PreguntasService?action=cargarPreguntas";
    AJAX_req.open("GET",url,true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200){
                var object = JSON.parse(AJAX_req.responseText,JsonUtils.revive);
                callBack(object);
            }
        };
        AJAX_req.send();
};
Proxy.preguntasFiltro = function(topic,idUsuario,callBack){
    var AJAX_req = new XMLHttpRequest();
    url = "/Preguntas/PreguntasService?action=buscarPreguntas";
    AJAX_req.open("POST",url,true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200){
                var object = JSON.parse(AJAX_req.responseText,JsonUtils.revive);
                callBack(object);
            }
        };
        AJAX_req.send("topic="+topic + "&idUsuario=" + idUsuario);
};
Proxy.cargarRespuestas = function(idPregunta,callBack){
    var AJAX_req = new XMLHttpRequest();
    url = "/Preguntas/PreguntasService?action=cargarRespuestas";
    AJAX_req.open("POST",url,true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200){
                var object = JSON.parse(AJAX_req.responseText,JsonUtils.revive);
                callBack(object);
            }
        };
        AJAX_req.send("idPregunta="+idPregunta);
};
Proxy.userLogin = function(user,callBack){
    json = JSON.stringify(user,JsonUtils.replacer);
    var AJAX_req = new XMLHttpRequest();
    url="/Preguntas/PreguntasService?action=userLogin";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            jsonText=AJAX_req.responseText;
            var object = JSON.parse( jsonText,JsonUtils.revive );
            callBack(object);
        }
    };
    AJAX_req.send("user="+json);   
};
Proxy.getUser = function(callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/Preguntas/PreguntasService?action=getUser";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            jsonText=AJAX_req.responseText;
            var object = JSON.parse( jsonText,JsonUtils.revive );
            callBack(object);
        }
    };
    AJAX_req.send();   
};

Proxy.contestarPregunta = function(userQuestion,callBack){
    var json = JSON.stringify(userQuestion,JsonUtils.replacer);
    var AJAX_req = new XMLHttpRequest();
    url="/Preguntas/PreguntasService?action=contestarPregunta";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");      
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            callBack(AJAX_req.responseText);
        }
    };
    AJAX_req.send("userQuestion="+json); 
};
Proxy.cargarRespuestasCorrectas = function(callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/Preguntas/PreguntasService?action=cargarRespuestasCorrectas";
    AJAX_req.open("GET",url,true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
            if (AJAX_req.readyState === 4 && AJAX_req.status === 200){
                var object = JSON.parse(AJAX_req.responseText,JsonUtils.revive);
                callBack(object);
            }
        };
        AJAX_req.send();
};

Proxy.userLogout = function(callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/Preguntas/PreguntasService?action=userLogout";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            callBack();
        }
    };
    AJAX_req.send();   
};
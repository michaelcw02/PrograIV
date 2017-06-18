var Proxy = Proxy || {};

Proxy.productDelete = function(product,callBack){
    jsonText = JSON.stringify(product,JsonUtils.replacer);
    var AJAX_req = new XMLHttpRequest();
    url="/33-CarritoCompra/ProductosService?action=productDelete";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var callBackConstructor = function(productParameter){ 
            return function(){
                if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
                    callBack(productParameter);
                }            
            };
        };
    AJAX_req.onreadystatechange = callBackConstructor(product);
    AJAX_req.send("product="+jsonText);   
};

Proxy.productListCategory = function(category,callBack){
    jsonText = category;
    var AJAX_req = new XMLHttpRequest();
    url="/33-CarritoCompra/ProductosService?action=productListCategory";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            jsonText=AJAX_req.responseText;
            var object = JSON.parse(jsonText,JsonUtils.revive );
            callBack(object);
        }
    };
    AJAX_req.send("category="+jsonText);   
};

Proxy.ProductListSearch = function(criteria,callBack){
    jsonText = criteria;
    var AJAX_req = new XMLHttpRequest();
    url="/33-CarritoCompra/ProductosService?action=ProductListSearch";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            jsonText=AJAX_req.responseText;
            var object = JSON.parse( jsonText,JsonUtils.revive );
            callBack(object);
        }
    };
    AJAX_req.send("criteria="+jsonText);   
};

Proxy.ProductListAll = function(callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/33-CarritoCompra/ProductosService?action=ProductListAll";
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

Proxy.userLogin = function(user,callBack){
    jsonText = JSON.stringify(user,JsonUtils.replacer);
    var AJAX_req = new XMLHttpRequest();
    url="/33-CarritoCompra/ProductosService?action=userLogin";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            jsonText=AJAX_req.responseText;
            var object = JSON.parse( jsonText,JsonUtils.revive );
            callBack(object);
        }
    };
    AJAX_req.send("user="+jsonText);   
};

Proxy.clientGet = function(callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/33-CarritoCompra/ProductosService?action=clientGet";
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

Proxy.PurchaseConfirm = function(compra,items,callBack){
    jsonCompra = JSON.stringify(compra,JsonUtils.replacer);
    jsonItems = JSON.stringify(items,JsonUtils.replacer);
    var AJAX_req = new XMLHttpRequest();
    url="/33-CarritoCompra/ProductosService?action=PurchaseConfirm";
    AJAX_req.open( "POST", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            jsonText=AJAX_req.responseText;
            var object = JSON.parse( jsonText,JsonUtils.revive );
            callBack(object);
        }
    };
    AJAX_req.send("compra="+jsonCompra+"&items="+jsonItems);   
};

Proxy.PurchaseListAll = function(callBack){
    var AJAX_req = new XMLHttpRequest();
    url="/33-CarritoCompra/ProductosService?action=PurchaseListAll";
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


Storage = {
    store: (id, object) => {
        return localStorage.setItem(id, JSON.stringify(object, this.replacer));
    },
    replacer: (key, value) => {
        if(value instanceof Persona)
            value._class = "Persona";
        if(value instanceof Direccion)
            value._class = "Direccion";
        return value;
    },
    retrieve: function (id) {
        let jsonObject = localStorage.getItem(id);
        return (jsonObject === null) ? null : JSON.parse(jsonObject, this.reviver);
    },
    reviver: function (key, value) {
        
    }
}
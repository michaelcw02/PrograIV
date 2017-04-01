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
        return (jsonObject === undefined) ? undefined : JSON.parse(jsonObject, this.reviver);
    },
    reviver: function (key, value) {
        if(value instanceof Object) {
            if(value._class === "Persona")
                return new Persona(value.cedula, value.nombre, value.sexo, value.direccion);
            if(value._class === "Direccion")
                return new Direccion(value.dir, value.canton, value.distrito, value.provincia);
        }
        return value;
    }
}
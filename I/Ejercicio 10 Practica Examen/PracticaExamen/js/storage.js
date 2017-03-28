Storage = {
    store: (id, object) => {
        return localStorage.setItem(id, JSON.stringify(object, this.replacer));
    },
    replacer: (key, value) => {
        if(value instanceof Estudiante)
            value._class = "Estudiante";
        if(value instanceof Examenes)
            value._class = "Examenes";
        return value;
    },

    retrieve: function (id) {
        let jsonObject = localStorage.getItem(id);
        return (jsonObject === null) ? null : JSON.parse(jsonObject, this.reviver);
    },
    reviver: function (key, value) {
        if(value instanceof Object) {
            if(value._class === "Estudiante")
                return new Estudiante(value.carnet, value.apellidos, value.nombre, value.examenes);
            if(value._class === "Examenes")
                return new Examenes(value.arrayExamenes);
        }
        return value;
    }
}
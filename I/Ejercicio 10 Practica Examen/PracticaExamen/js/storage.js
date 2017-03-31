Storage = {
    store: function (id, object) {
        return localStorage.setItem(id, JSON.stringify(object, this.replacer));
    },
    replacer: function (key, value) {
        if(value instanceof Estudiante)
            value._class = "Estudiante";
        if(value instanceof Examenes) {
            value.arrayExamenes = toString(value.arrayExamenes);
            value._class = "Examenes";
        }
        return value;
    },

    retrieve: function (id) {
        let jsonObject = localStorage.getItem(id);
        return (jsonObject == undefined) ? undefined : JSON.parse(jsonObject, this.reviver);
    },
    reviver: function (key, value) {
        if(value instanceof Object) {
            if(value._class === "Estudiante")
                return new Estudiante(value.carnet, value.apellidos, value.nombre, value.examenes);
            if(value._class === "Examenes") {
                let array = toNumber(value.arrayExamenes);
                return new Examenes(array);
            }
        }
        return value;
    }
}

function toString(array) {
    var newArray = [];
    for(let i = 0; i < array.length; i++)
        newArray.push(array[i].toString());
    return newArray;
}
function toNumber(array) {
    var newArray = [];
    for(let i = 0; i < array.length; i++)
        newArray.push(parseFloat(array[i]));
    return newArray;
}
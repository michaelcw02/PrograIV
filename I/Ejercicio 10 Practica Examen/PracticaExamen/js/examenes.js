function Examenes(arrayExamenes) {
    this.Examenes(arrayExamenes);
}
function Examenes() {
    let arrayExamenes = [];
    arrayExamenes.push(0);
    arrayExamenes.push(0);
    arrayExamenes.push(0);
}

Examenes.prototype = {
    Examenes: function(arrayExamenes) {
        this.arrayExamenes = arrayExamenes;
    },
    getPromedio: function() {
        for(var i in this.arrayExamenes)
            suma += arrayExamenes[i];
        return suma / arrayExamenes.length;
    }
}
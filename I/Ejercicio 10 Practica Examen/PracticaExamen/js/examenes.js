function Examenes(arrayExamenes) {
    this.Examenes(arrayExamenes);
}
function Examenes() {
    let arrayExamenes = [];
    arrayExamenes.push(0);
    arrayExamenes.push(0);
    arrayExamenes.push(0);
    this.Examenes(arrayExamenes);
}

Examenes.prototype = {
    Examenes: function(arrayExamenes) {
        this.arrayExamenes = arrayExamenes;
    },
    getPromedio: function() {
        let suma = 0;
        for(var i in this.arrayExamenes)
            suma += this.arrayExamenes[i];
        return suma / this.arrayExamenes.length;
    }
}
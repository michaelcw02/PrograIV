
function Examenes(arrayExamenes = [0, 0, 0]) {
    this.Examenes(arrayExamenes);
}

Examenes.prototype = {
    Examenes: function(arrayExamenes) {
        this.arrayExamenes = arrayExamenes;
    },
    getPromedio: function() {
        let suma = 0;
        for(var i in this.arrayExamenes)
            suma += parseFloat(this.arrayExamenes[i]);
        return suma / this.arrayExamenes.length;
    }
}
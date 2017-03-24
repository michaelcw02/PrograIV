function Direccion (signs, canton, distrito, provincia) {
    this.Direccion(signs, canton, distrito, provincia);
}
function toString() {
    return this.signs + ", " + this.canton + ", " + this.distrito + ", " + this.provincia;
}

Direccion.prototype = {
    Direccion: function (signs, canton, distrito, provincia) {
        this.signs = signs;
        this.canton = canton;
        this.distrito = distrito;
        this.provincia = provincia;
    }    
}
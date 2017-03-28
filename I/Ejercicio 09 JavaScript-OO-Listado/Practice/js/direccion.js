
function Direccion(dir, canton, distrito, provincia) {
    this.Direccion(dir, canton, distrito, provincia);
}

Direccion.prototype = {
    Direccion: function (dir, canton, distrito, provincia) {
        this.dir = dir;
        this.canton = canton;
        this.distrito = distrito;
        this.provincia = provincia;
    },
    toString: function() {
        return  this.dir + ", " + this.canton + ", " + this.distrito + ", " + this.provincia;
    }

}
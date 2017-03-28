
function Direccion(dir, canton, distrito, provincia) {

}

Direccion.prototype = {
    Direccion: (dir, canton, distrito, provincia) => {
                    this.dir = dir;
                    this.canton = canton;
                    this.distrito = distrito;
                    this.provincia = provincia;
                },
    toString: () => {
                    return dir + ", " + canton + ", " + distrito + ", " + provincia;
                } 
}
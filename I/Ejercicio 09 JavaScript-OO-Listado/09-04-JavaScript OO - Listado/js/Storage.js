Storage = {
store : function (id, object){
			return localStorage.setItem(id, JSON.stringify(object,this.replacer));
		},

retrieve: function (id){
			  var jsonObject = localStorage.getItem(id);
			  if(jsonObject === null){
				return null;
			  }
			  else{
				 return JSON.parse(jsonObject,this.revive);
			  }
		},

revive: function (k,v) {
		if (v instanceof Object && v._class == 'Persona') {
			return new Persona(v.cedula,v.nombre,v.sexo, v.direccion);
		}
		if (v instanceof Object && v._class == "Direccion") {
			return new Direccion(v.signs, v.canton, v.distrito, v.provincia);
		}
		return v;
	},

replacer: function (k,v) {
		if (v instanceof Persona) {
			v._class="Persona";
		}
		if (v instanceof Direccion) {
			v._class="Direccion";
		}
		return v;
	}
};


Storage = {
store : function (id, object){
			return localStorage.setItem(id, JSON.stringify(object,this.replacer));	//REPLACER IS A FUNCTION THAT JSON DOES BEFORE stringifyING
		},

retrieve: function (id){
			  var jsonObject = localStorage.getItem(id);
			  if(jsonObject === null){
				return null;
			  }
			  else{
				 var javaScriptObject = JSON.parse(jsonObject,this.revive);	
				 return javaScriptObject;
			  }
		},

//k STANDS FOR key
revive: function (k,v) {
		if (v instanceof Object && v._class == 'Persona') {
			return new Persona(v.cedula,v.nombre,v.sexo);
		}
		return v;
	},
//k STANDS FOR key
replacer: function (k,v) {
		if (v instanceof Persona) {
			v._class="Persona";
		}
		return v;
	}
};


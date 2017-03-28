
Storage = {
    store: (id, object) => {
        return localStorage.setItem(id, JSON.stringify(object, this.replacer));
    },
    replacer: (key, value) => {

    },
    retrieve: (id) => {
        let jsonObject = localStorage.getItem(id);
        return (jsonObject === null) ? null : JSON.parse(jsonObject, this.reviver);
    },
    reviver: (key, value) => {
        
    }
}
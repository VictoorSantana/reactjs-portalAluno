module.exports = { 
 
    get_form: (target) => {
        var object = {};
        const formData = new FormData(target);

        formData.forEach(function(value, key) {
            object[key] = value
        });

        return object
    },

    is_null: (obj) => {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    },

    is_empty: (string = '') => {
        return string.trim().length == 0;
    }
    
}
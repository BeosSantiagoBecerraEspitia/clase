// estado y comportamiento 
var x = 10 

class Animal {
    constructor(ombre){
        this.fnombre = ombre;
    }
    get nombre(){
        return this.fnombre;
    }
    set nombre(ombre){
        this.fnombre = ombre;
    }
    mensaje(){
        console.log("mensaje");
    }
}

var objeto1 = new Animal('conejo'); 
console.log(objeto1)
objeto1.nombre = 'conejo domestico ';
console.log(objeto1.nombre)
console.log(objeto1.fnombre)
console.log(objeto1.ombre)



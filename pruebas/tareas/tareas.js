function suma (n1,d1,n2,d2){
    if(d1==d2){
        return {
            numerador : n1+n2,
            denominador : d2
        }

    }
    else{
        return {
            numerador : (n1*d2) +(n2*d1),
            denominador : d1*d2
        }

    }
}

function resta (n1,d1,n2,d2){
    if(d1==d2){
        return {
            numerador : n1-n2,
            denominador : d2
        }

    }
    else{
        return {
            numerador : (n1*d2)-(n2*d1),
            denominador : d1*d2
        }

    }
}

function multiplicacion (n1,d1,n2,d2){
    return{
        numerador : n1*n2,
        denominador : d1*d2
    }
}

function divicion (n1,d1,n2,d2){
    return{
        numerador : n1*d2,
        denominador : d1*n2
    }
}
console.log(suma(5,3,4,6));
console.log(resta(5,3,4,6));
console.log(divicion(5,3,4,6));
console.log(multiplicacion(5,3,4,6));
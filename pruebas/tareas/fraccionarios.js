var numerador1 = Math.floor((Math.random())*10);
var denominador1 = Math.floor((Math.random())*10);
var numerador2 = Math.floor((Math.random())*10);
var denominador2 = Math.floor((Math.random())*10);

function suma (n1,d1,n2,d2){
    if(d1=d2){
        numeradorr = n1+n2 ;
        denominadorr = d1 ;
        return {
            numerador : numeradorr ,
            denominador : denominadorr 
        }
        
    }else{
        numeradorr = (n1*d2)+(n2*d1) ;
        denominadorr = d1*d2 ;
        return {
            numerador : numeradorr ,
            denominador : denominadorr 
        }
    }
    
    
}

function resta (n1,d1,n2,d2){
    
}

function multiplicacion (n1,d1,n2,d2){
    
}

function divicion (n1,d1,n2,d2){
    
}

console.log(suma(1,3,3,7))
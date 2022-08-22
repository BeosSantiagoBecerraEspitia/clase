var x = Math.floor((Math.random())*100);
var y = Math.floor((Math.random())*100);
var z = Math.floor((Math.random())*100);

function cuadtraticapostiva(a,b,c){
    return (((-b)+(Math.sqrt((b*b)-(4*a*c))))/(2*a));
}


function cuadtraticanegativa(a,b,c){
    return (((-b)-(Math.sqrt((b*b)-(4*a*c))))/(2*a));
}


console.log("a es",x,"b es", y,"c es ",z, "x seria" ,cuadtraticapostiva(x,y,z),"o ", cuadtraticanegativa(x,y,z));
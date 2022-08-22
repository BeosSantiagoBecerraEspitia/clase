var distanciamedellin = 415.8
var distanciacali = 460.6
var distanciacartagena = 1038.6
var distanciabarranquilla = 1000
var distanciacucuta = 555.8 

function kladc(d){
    return d*100;
}

function klam(d){
    return d*1000;
}

function klac(d){
    return d*100000;
}

console.log("distancia en kilometros:");

console.log(distanciamedellin)
console.log(distanciacali)
console.log(distanciacartagena)
console.log(distanciabarranquilla)
console.log(distanciacucuta)

console.log("distancia en decametros:");
console.log(kladc(distanciamedellin));
console.log(kladc(distanciacali));
console.log(kladc(distanciacartagena));
console.log(kladc(distanciabarranquilla));
console.log(kladc(distanciacucuta));

console.log("distancia en metros:");

console.log(klam(distanciamedellin));
console.log(klam(distanciacali));
console.log(klam(distanciacartagena));
console.log(klam(distanciabarranquilla));
console.log(klam(distanciacucuta));

console.log("distancia en centimetros:");

console.log(klac(distanciamedellin));
console.log(klac(distanciacali));
console.log(klac(distanciacartagena));
console.log(klac(distanciabarranquilla));
console.log(klac(distanciacucuta));
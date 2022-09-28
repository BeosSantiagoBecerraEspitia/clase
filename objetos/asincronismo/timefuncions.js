function externa() {
    console.log('funcion externa a setTimeout')
}


const funcionext=()=> {
    console.log('funcion externa flecha')
}

setTimeout(() => {
    console.log('yo amo soacha ')
}, 2000);

setTimeout(function(){
    console.log('Funcion clasica')
}, 3000);

setTimeout(externa, 5000)
setTimeout(funcionext, 6000)

setInterval(() => {
    console.log('se repite ')
}, 3000);

let timerId = setInterval(() => console.log('amo el sena'),2000)

// despues de 5 segundos parar 
setTimeout(() => {
    clearInterval(timerId)
}, 7000);



// escriba un contador que valla de 1 a 10 que se muestre cada 2 segundos

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 2000*i);
        
    }

n = 0 
let numeros = setInterval(() => {
    console.log(n)
    n++
}, 2000);



setTimeout(() => {
    clearInterval(timerId)
}, 7000);

for (var i = 0; i < 10; i++) {
    setTimeout(() =>{
        console.log(i)
    },2000)
    
}


function receptora(cb1,cb2,parametro) {
    cb1();
    setTimeout(() => {
        console.log('dentro de la funcion receptora')
    }, 0);
    cb2(parametro)
}
function funcionargumento(parametro) {
    console.log(`${parametro} de la funcion argumento`)
}

receptora (()=>console.log('Funcion Anonima '),funcionargumento,100);


// 


function trabajoArreglos(cb1,cb2,vec) {
     let vec1 = []
    setTimeout(() => {
        console.log(vec1)
    }, 1000);
    vec1 = cb1(vec)
    console.log(vec1,cb2(vec))
}


trabajoArreglos.l
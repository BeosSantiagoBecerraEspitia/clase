
function divisoresde(numero) {
    var divisores=[]
    posicion=0
    for (let div = 0; div <= numero; div++) {
        if (numero % div == 0) {

            divisores[posicion]=div
            
        }
    }
    return divisores
}

console.log(`los divisores de 60 son ${divisoresde(60)}`)


// funcion si un numero es primo 
function primo(numero) {
    var divisores = 0
for (let div = 0; div <= numero; div++) {
    if (numero % div == 0) {
         divisores++;
    }
    
}

if (divisores == 2) {
    console.log(numero,"es un primo ")
} else {
    console.log(numero,"no es un primo ")
}
}

primo(11)
primo(15)


// funcion que diga si un numero es perfecto o no 

function perfecto(numero) {
    total = 0
for (let div = 0; div = numero; div++) {
    if (numero % div == 0) {
        total = total + div 
    }
}

if (total== numero) {
    console.log(numero,'es un numero perfecto')
}else{
    console.log(numero,'no es un numero perfecto')
}
}

console.log(perfecto(28))

// 4 Determinar cuales y cantos numeros perfectos hay entre 1 y 1000

function perfectosde(rango) {
    
}

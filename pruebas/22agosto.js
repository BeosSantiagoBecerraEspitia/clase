arreglo = []
function llenararreglo ( array , n ){

    if (n<5 || n>25){
        console.log("el numero no esta dentro del rango ")
    }else{for (let i = 0; i <n; i++) {
    
        array[i] =Math.floor((Math.random() * 100)-50) 
    }}
    return array
}

llenararreglo(arreglo , 10)

console.log(arreglo)

function media(arreglo) {
    suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i]
        
    }
    median = suma / arreglo.length
    return median
}

console.log("media",media(arreglo))

function diferenciaelementos(array) {
    arraydiferencia = []
    mediaa = media(array)
    for (let i = 0; i < array.length; i++) {
        arraydiferencia[i]= array[i]-mediaa
        
    }
    return arraydiferencia
}

arraydiferencia = diferenciaelementos(arreglo)

console.log(arraydiferencia)

function faltaosobra(array){
    
    for (let i = 0; i < array.length; i++) {
        m = media(array)
        if (array[i]>m) {
            console.log(`a ${array[i]} le sobra ${array[i]-m} para llegar a ${m}`)
        } else {
            console.log(`a ${array[i]} le falta ${m-array[i]} para llegar a ${m}`)
        }
        
    }
}

faltaosobra(arreglo)


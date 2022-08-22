arreglo1 =  []
arreglo2 =  []
arreglo3 =  []

function llenararreglo(arreglo){
    for (let i = 0; i < Math.floor((Math.random() *15)+5); i++) {
        arreglo[i]=Math.floor(Math.random()*100)
        
    }
    return arreglo
}

llenararreglo(arreglo1)
llenararreglo(arreglo2) 
llenararreglo(arreglo3)

console.log(arreglo1,arreglo2,arreglo3)
var arreglomasgrande = 0

if (arreglo1.length>arreglo2.length && arreglo1.length>arreglo3.length) {
    console.log("el arreglo mas grande es arreglo1")
    arreglomasgrande=arreglo1
} else {
    if (arreglo2.length>arreglo1.length && arreglo2.length>arreglo3.length) {
        console.log("el arreglo mas grande es arreglo2")
        arreglomasgrande=arreglo2
    } else {
        if (arreglo1.length>arreglo2.length && arreglo1.length>arreglo3.length) {
            console.log("el arreglo mas grande es arreglo3")
            arreglomasgrande=arreglo3
        }
    }
}


function pareseimpares(arreglo){

    pares_impares=[0,0]
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]%2==0) {
            pares_impares[0]++
        } else if (arreglo[i]%2==1) {
            pares_impares[1]++
        }
        
    }
    return pares_impares
}

console.log(`en el arreglo1 hay ${pareseimpares(arreglo1)[0]} pares y ${pareseimpares(arreglo1)[1]} impares `)
console.log(`en el arreglo2 hay ${pareseimpares(arreglo2)[0]} pares y ${pareseimpares(arreglo2)[1]} impares `)
console.log(`en el arreglo3 hay ${pareseimpares(arreglo3)[0]} pares y ${pareseimpares(arreglo3)[1]} impares `)


function rellenar(arreglo){
    for (let e = arreglo.length; e<arreglomasgrande.length; e++) {
        arreglo[e]=arreglomasgrande[e]
        
    }
    return arreglo
}

rellenar(arreglo1)
rellenar(arreglo2)
rellenar(arreglo3)

console.log(arreglo1,arreglo2,arreglo3)



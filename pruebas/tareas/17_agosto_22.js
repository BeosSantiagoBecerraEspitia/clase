/*function perfecto(numero) {
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

console.log(perfecto(28))*/

// escriba una funcion que dadp el tamaño de sus lados diga el tamaño de sus lados 

/*
function tamaño(a,b,c){
    similitudes = 0
     var tipotriangulo
    if (a==b) {
        similitudes++
    }
    if (c==b) {
        similitudes++
    }
    if (a==c) {
        similitudes++
    }

    if (similitudes==0) {
        tipotriangulo='escaleno'
    } else if (similitudes==1) {
        tipotriangulo='isoceles'
    } else {
        tipotriangulo='equilatero'
    }
    return tipotriangulo
}

console.log(`el triangulo es e tipo ${tamaño(2,2,3)}`) */

//FUNCION TEOREMA DE PITAGORAS

function pitagoras(a,b) {
    c = Math.sqrt((a*a )+ (b*b));
    return c 
}

console.log(pitagoras(6,8))


// funcion de flecha 

const saludar = nombre=>`hola ${nombre} bienbenido a tu casa`
const media = (a,b,c) => {
    if (a > b) {
        if(c > a){
          console.log(`El valor del medio es ${a}`)
        }else if(c > b){
            console.log(`El valor del medio es ${c}`)
          }else if(b > a){
            if(c > b){
              console.log(`El valor del medio es ${b}`)
            }
          }else if(b > c){
            console.log(`El valor del medio es ${b}`)
          }
      }else if(b > a){          
        if(c > b){
          console.log(`El valor del medio es ${b}`)
        }else if(c > a){
          if(b > c){
          console.log(`El valor del medio es ${c}`)
          }
        }else if(b > a){
          console.log(`El valor del medio es ${a}`)
        }
      }
}

const iguales =(a,b,c) => {
    if (a==b && b==c) {
        console.log(`los tres numeros son iguales`)
    } else {if (a!=b && b!=c && c!=a ) {
        console.log(`los tres numeros son diferentes `)
    } else {
        console.log(`dos lados son iguales`)
    }
        
    }
} 

console.log()








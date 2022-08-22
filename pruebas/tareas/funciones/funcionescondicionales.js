//3 NUMEROS Y DECIR CUAL ES EL DEL MEDIO 

function medio(a,b,c) {
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


medio(12,43,5)


//Escribe una funcion  que pida tres numeros y que reciba si son los tres iguales, si hay dos iguales o si son los tres distintos

function iguales(a,b,c) {
    if (a==b && b==c) {
        console.log(`los tres numeros son iguales`)
    } else {if (a!=b && b!=c && c!=a ) {
        console.log(`los tres numeros son diferentes `)
    } else {
        console.log(`dos lados son iguales`)
    }
        
    }

    
}

iguales(2,2,5)


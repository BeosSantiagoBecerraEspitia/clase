/*R =(NACIMIENTOS - MUERTOS )/( TASAPOBLACION)


DN/DT 

N(T) = N (1+R)A LA T

N 
10
13
17*/
// calcular la poblacion en 20 años 
// tasa de naciomiento aleatorio maximo 10 % de muerte de 3 %
poblacion = Math.floor(Math.random() *9000+1000)

for (let i = 1; i < 20; i++) {
    tasa_nacimiento = Math.floor(Math.random() * (poblacion/10))
    tasamuerte= Math.floor(Math.random() * (poblacion*0.03))
    tasa_crecimiento = (tasa_nacimiento -tasamuerte)/poblacion
    poblacion1 =poblacion *(1 + tasa_crecimiento)**i
    console.log(`la tasa de crecimiento es : ${tasa_crecimiento} la poblacion es : ${poblacion1} `)
}

// al 10 % de la poblacion final le van a dar una casa  dentro de un set time out y se debe imprimir 5 segundo despue
// calcular el crecimento neto dentro de los 10 años 



poblacion = Math.floor(Math.random() *9000+1000)

for (let i = 0; i < 20; i++) {
    tasa_nacimiento = Math.floor(Math.random() * (poblacion/10))
    tasamuerte= Math.floor(Math.random() * (poblacion*0.03))
    tasa_crecimiento = (tasa_nacimiento -tasamuerte)/poblacion
    poblacion1 =poblacion *(1 + tasa_crecimiento)**i
    console.log(`la tasa de crecimiento es : ${tasa_crecimiento} la poblacion es : ${poblacion1} `)
}

function subsidio() {
    return new Promise((resolve, reject) => {
        casas = poblacion1*0.10
        setTimeout(() => {
            resolve(casas)
        }, 5000);
        
    })
}

function neto () {
    return new Promise((resolve, reject) => {
        nt = Math.floor((poblacion/poblacion1)*100)
        setTimeout(() => {
            resolve(nt)
         }, 5000);
         
    })
}

async function ambas (cb1,cb2) {
    cb1.then((c) => {
        console.log(`el numero de personas final es ${poblacion1} y se le dara casas a ${c} `);
    }) 

    cb2.then((a) => {
        console.log(`la poblacion original es ${poblacion}  la poblacion final es ${poblacion1} yel valor neto es : ${a}%`)
    })
}

subsidio().then((c) => {
    console.log(`el numero de personas final es ${poblacion1} y se le dara casas a ${c} `);
}) 

neto().then((a) => {
    console.log(`la poblacion original es ${poblacion}  la poblacion final es ${poblacion1} yel valor neto es : ${a}%`)
})
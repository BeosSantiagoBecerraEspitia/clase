palabra = 'AEIOUaeious'

function imprimir(cb1, cb2,vec) {
    mayus = vec.toUpperCase()
    minus = vec.toLowerCase()
    console.log(`hay ${cb1(vec)} mayusculas y ${cb2(vec)} miusculas `)
    console.log( ' la frase original es ',vec)
}

function contarmayusculas(vec) {
    numeros = '1234567890'
    m = 0
    mayus = vec.toUpperCase()
    for (let i = 0; i < vec.length; i++) {
        if (vec[i] == mayus[i] /*&& parseInt(i)==NaN*/) {
            m ++
        }
        for (let e = 0; e < vec.length; e++) {
            if (vec[i] == numeros[e] /*&& parseInt(i)==NaN*/) {
                m--
            }
        }
    }
    return m
}

function contarminusculas(vec) {
    m = 0
    minus = vec.toLowerCase()
    for (let i = 0; i < vec.length; i++) {
        if (vec[i] == minus[i]) {
            m++
        }
    }

    return m
}

console.log(contarminusculas(palabra))
console.log(contarmayusculas(palabra))
console.log(imprimir((contarmayusculas()),contarminusculas(),palabra))
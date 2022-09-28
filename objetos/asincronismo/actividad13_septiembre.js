palabra = 'ashdeASDŒûÛ12*_'


function general (cb1,cb2,vec) {
    mayor=vec.toUpperCase()
    menor = vec.toLowerCase()
    mayusculas=cb1(vec)
    minusculas = cb2(vec)
    console.log(`la cadena de texto tiene  ${mayusculas} mayusculas y ${minusculas} minusculos`)
    console.log(mayor)
    console.log(menor)
    console.log(vec)
}
function contarmayusculas (vec) {
    mayus = vec.toUpperCase()
    minus = vec.toLowerCase()
    m = 0
    for (let i = 0; i < vec.length; i++) {
        if (vec[i]==mayus[i] && vec[i]!=minus[i]) {
            m++
        } 
    }
    return m
}

function contarminusculas (vec) {
    mayus = vec.toUpperCase()
    minus = vec.toLowerCase() 
    m = 0
    for (let i = 0; i < vec.length; i++) {
        if (vec[i]!=mayus[i] && vec[i]==minus[i]) {
            m++
        } 
    }
    return m
}

function contarsimbolos (vec) {
    mayus = vec.toUpperCase()
    minus = vec.toLowerCase()
    m = 0
    for (let i = 0; i < vec.length; i++) {
        if (vec[i]==mayus[i] && vec[i]==minus[i]) {
            m++
        } 
    }
    return m
}
console.log(contarsimbolos(palabra))
general(contarmayusculas,contarminusculas,palabra)
// escriba una funcion que lea una cadena de texto y diga cuantas vocales tiene cuantas consonantes y cuantos caracteres caracteres diferentes hay 
console.log('perrohijueputa'[5])



function letras(palabra) {
    palabra.toLowerCase()
    letras = [0,0,0]//vocales , consonantes , otros
    vocales = ['a','e','i','o','u']
    consonantes = ['b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z']
    for (let i = 0; i < palabra.length; i++) {
        for (let v = 0; v < vocales.length; v++) {
            if (palabra[i]==vocales[v]) {
                letras[0]++
            }
            
        }
        for (let c = 0; c < consonantes.length; c++) {
            if (palabra[i]==consonantes[c]) {
                letras[1]++
            }
        }
        letras[2]=(palabra.length)-(letras[0]+letras[1])
        
    }
    return letras
}

console.log(letras('malparido'))
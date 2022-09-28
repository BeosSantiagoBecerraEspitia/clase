/*var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Hola');
    }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value);
  });
  
  console.log(myPromise);
  
setTimeout(() => {
    console.log(myPromise);
}, 3500);
*/


function base () {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve()
        setTimeout(() => {
            console.log('linea de codigo dentro de la funcion promesa')
        }, 500);
        } else {
            reject()
        }
        
    })
}

base()
    .then(() =>{
        console.log('en el then')
    })
    .then(auxiliar)

    function auxiliar() {
        console.log('funcion auxiliar')
    }

function contarletras() {
    return new Promise((resolve, reject) => {
}
//requireds
const fs = require("fs");
const color = require('colors')


let listarTabla = (base, limite = 10) => {

  console.log('==========='.red);
  console.log(`tabla de ${ base }`.red);
  console.log('==========='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base * i}`); 
      }


}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if ( !Number(base)){
            reject(`el valor introducido ${base} no es un numero`);
            return; 
        }
        let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base}*${i}=${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);

      console.log(`el archivo tabla-${base}-al-${limite}.txt ha sido creado`);
    });
  });
};

module.exports = {
    crearArchivo,
    listarTabla
}
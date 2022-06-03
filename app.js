const argv = require('./config/yargs').argv;
const color = require('colors')



const { help } = require("yargs");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite)
    break;
  case "crear":
      crearArchivo(argv.base, argv.limite)
  .then((archivo) => console.log(`archivo creado: ${archivo.green}`))
  .catch((e) => console.log(e));
    
    break;
  default:
    console.log("comando no reconocido");
}

let argv2 = process.argv;

console.log("limite", argv.limite);

/*let parametro = argv[2]
let base = parametro.split('=')[1]
console.log(base);

/*let data = "";
for (let i = 1; i <= 10; i++) {
  data += `${base}*${i}=${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;

  console.log(`el archivo tabla-${base}.txt ha sido creado`);
});*/



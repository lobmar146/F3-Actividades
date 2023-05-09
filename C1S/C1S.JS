const usuarios = [
    {
        apodo: 'Nepeta',
        email: 'nepetalover123@gmail.com',
        mascotas: [
            { nombre: 'Luna', edad: 3, color: 'blanco y negro' },
            { nombre: 'Simba', edad: 1, color: 'naranja' },
            { nombre: 'Mia', edad: 5, color: 'gris' }
        ]
    },
    {
        apodo: 'CatLady',
        email: 'catlady999@yahoo.com',
        mascotas: [
            { nombre: 'Tom', edad: 2, color: 'gris y blanco' },
            { nombre: 'Lucas', edad: 4, color: 'negro' }
        ]
    },
    {
        apodo: 'GatitoFeliz',
        email: 'gatitofeliz22@hotmail.com',
        mascotas: [
            { nombre: 'Cleo', edad: 1, color: 'marrón' },
            { nombre: 'Toby', edad: 6, color: 'blanco' },
            { nombre: 'Nina', edad: 2, color: 'negro y blanco' }
        ]
    },
    {
        apodo: 'ElGatoNegro',
        email: 'elgatonegro@outlook.com',
        mascotas: [
            { nombre: 'Oreo', edad: 3, color: 'negro y blanco' },
            { nombre: 'Milo', edad: 7, color: 'naranja' }
        ]
    },
    {
        apodo: 'GatitoTierno',
        email: 'gatitotierno5555@gmail.com',
        mascotas: [
            { nombre: 'Pelusa', edad: 2, color: 'gris' },
            { nombre: 'Kitty', edad: 4, color: 'blanco y negro' },
            { nombre: 'Loki', edad: 1, color: 'marrón y blanco' }
        ]
    },
    {
        apodo: 'CatQueen',
        email: 'catqueen8888@hotmail.com',
        mascotas: [
            { nombre: 'Fluffy', edad: 5, color: 'blanco y gris' },
            { nombre: 'Sasha', edad: 2, color: 'marrón y blanco' }
        ]
    },
    {
        apodo: 'Nepeta',
        email: 'nepetaalegre7@yahoo.com',
        mascotas: [
            { nombre: 'Punky', edad: 3, color: 'naranja' },
            { nombre: 'Zoe', edad: 1, color: 'blanco' },
            { nombre: 'Simón', edad: 4, color: 'negro' }
        ]
    },
    {
        apodo: 'GatoMimoso',
        email: 'gatomimoso55@gmail.com',
        mascotas: [
            { nombre: 'Leo', edad: 2, color: 'blanco' },
            { nombre: 'Coco', edad: 3, color: 'negro y blanco' }
        ]
    }
]

//EJE1
console.log('\nEJERCICIO 1\n')
console.log('El usuario uno tiene id 1')
console.log(
    'El nombre de la primer mascota es: ' + usuarios[2].mascotas[0].nombre
)
console.log(
    `El color de la segunda mascota del tercer usuario es ${usuarios[2].mascotas[1].color}`
)

//EJE2
//practica de destructuracion :)
console.log('\nEJERCICIO 2\n')
let [primeroElemento, , , cuartoElemento] = usuarios
console.log(primeroElemento.email, primeroElemento.mascotas)

//EJE3
console.log('\nEJERCICIO 3\n')
let mascotasCopia = [...primeroElemento.mascotas]

mascotasCopia.push({ nombre: 'Nami', edad: 2, color: 'negro' })
console.log(
    `El elemento original es:\n ${JSON.stringify(
        primeroElemento.mascotas
    )} \n y el segundo listado es:\n ${JSON.stringify(mascotasCopia)}`
)

//Eje4
//Defino la funcion que por parametro van las propiedades (props). Estas, son un objeto en realidad
//que voy a desestructurar para acceder a cada uno
function obtenerApodoyCantidadMascotas(props) {
    //desestructuro
    const { apodo, cantMascotas } = props
    //devuelvo
    return `El Usuario ${apodo} tiene ${cantMascotas} mascotas`
}

//armo el objeto con los datos del primer usuario
const informacionUsuario = {
    apodo: primeroElemento.apodo,
    cantMascotas: primeroElemento.mascotas.length
}
//muestro
console.log(
    '\nEJERCICIO 4\n' + obtenerApodoyCantidadMascotas(informacionUsuario)
)

//Eje 5
// Usamos la operación filter para filtrar los usuarios que tienen más de 1 mascota
console.log('\nEJERCICIO 5\n')
const usuariosConMasDe1Mascota = usuarios.filter(
    usuario => usuario.mascotas.length > 1
)

// Usamos la operación map junto con la función anterior para crear un array de strings con el formato deseado
const arregloConTexto = usuariosConMasDe1Mascota.map(usuario =>
    obtenerApodoyCantidadMascotas({
        apodo: usuario.apodo,
        cantMascotas: usuario.mascotas.length
    })
)

//mostramos
console.log(arregloConTexto)

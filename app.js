var repeticion = 5

const usuario = "coderhouse"
const contrasenia = "coderhouse"

let nombre = prompt ("Ingrese su nombre")
let apellido = prompt ("ingrese su apellido")

while (repeticion > 0) {
    let usuarioIngresado = prompt("Ingresa su nombre de usuario")
    let contraseniaIngresada = prompt("Ingrese su contraseña")

    if ((usuario == usuarioIngresado) && (contrasenia == contraseniaIngresada)) {
        alert(`Usuario correcto, bienvenido al sitio ${nombre} ${apellido}`)
        break
    } else {
        repeticion--;
        alert(`el nombre de usuario o la contraseña ingresada es incorrecta, le quedan ${repeticion} intentos`)
    }
}

if (repeticion == 0) {
    alert ("USUARIO BLOQUEADO")
}

// 1. obtenemos al tag que daremos el evento
let enviarRegistro = document.getElementById('enviarRegistro');
let usuarios = []


// 2. escuchamos el evento
enviarRegistro.addEventListener('click', (e) => {
    e.preventDefault // se espera a que el cliente haga click, porque en la recarga de la página se ejecuta
    let email = document.getElementById('user').value
    let contraseña = document.getElementById('password').value

    if(email == '' || contraseña == ''){
        alert('No ha completado los campos obligatorios')
    } else {
        registrarUsuario(email,contraseña)
        limpiarForm()
    }
});

const registrarUsuario = (email,contraseña) => {
    let usuario = {
        email: email,
        contraseña: contraseña
    }

    usuarios.push(usuario)

    localStorage.setItem('Usuarios', JSON.stringify(usuarios))

    console.log(usuario)
    console.log(`La cantidad de usuarios registrados es de: ${usuarios.length}`)
}

const limpiarForm = () => {
    let formulario = document.getElementById('formRegister')
    // limpiamos los inputs del formulario
    formulario.reset()
}











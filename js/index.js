
let usuarios = localStorage.getItem('Usuarios')
let json = JSON.parse(usuarios);

// let listaUsuarios = document.getElementById('usuarios')
// listaUsuarios.style.color = 'red';
// listaUsuarios.innerHTML = usuarios;


// var lista = document.getElementById('lista')

// json.forEach(user => {
//     var li = document.createElement(li);
//     li.innerHTML = `<li> usuario: ${user.email} // contraseña: ${user.contraseña}</li>` 
//     lista.appendChild(li);
// });

let boton = document.getElementById('mostrarUsuarios')

boton.addEventListener('click',(e)=> {
    
    let tabla = document.getElementById('tablaUsuarios')

    for (let i = 0; i < json.length; i++) {
        let row = document.createElement('tr')

        let celdaEmail = document.createElement('td')
        let celdaContraseña = document.createElement('td')

        celdaEmail.textContent = json[i].email
        celdaContraseña.textContent = json[i].contraseña
        
        row.appendChild(celdaEmail)
        row.appendChild(celdaContraseña)
        tablaUsuarios.appendChild(row)
    }
})



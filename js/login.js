


const login = () => {
    //alert('Bienvenido Admin')
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    let form = document.getElementById('formLogin');

    console.log(user);
    console.log(password);

    let usuario = "beto@gmail.com";
    let pass = "123456";

    if(user == usuario && pass == password){
        location.href = 'admin.html';
    }else{
        location.href="error.html";
    }

    form.reset();
};

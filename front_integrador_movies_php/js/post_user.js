// si se carga el dom entonces se ejecuta la función
document.addEventListener('DOMContentLoaded', async () => {

    formUserRegistro = document.getElementById('formUserRegistro');
    formUserRegistro.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(formUserRegistro);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        if (name === '' || email === '' || password === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
            //formato de json
            /* { 
                "name":"nombre",
                "email":"email",
                "password":"password",
                "edad": 25,
                "comidas_favoritas": ["milanesa", "pizza"]
               } */
        };
        const response = await fetch('http://localhost/comision_24143/CLASE_REPASO/project/api/create_user.php', options);
        const data = await response.json();
        if (response.status === 201) {
            alert('Usuario registrado correctamente');
            formUserRegistro.reset();
            location.reload();
        } else {
            alert('Error al registrar usuario');
        }
    });

});
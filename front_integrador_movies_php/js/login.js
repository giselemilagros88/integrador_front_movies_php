document.addEventListener('DOMContentLoaded', async () => {
    //levanto del formulario del login email y password
    FormloginUser = document.getElementById('FormloginUser');
    FormloginUser.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(FormloginUser);
        const email = formData.get('email');
        const password = formData.get('password');
        if (email === '' || password === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        const response = await fetch('http://localhost/comision_24143/CLASE_REPASO/project/api/login.php', options);
        const data = await response.json();
        if (response.status === 200) {
            alert('Usuario logueado correctamente');
            FormloginUser.reset();
            //REDIRECCIONAR A LA PAGINA DE INDEX.HTML
            location.href = '../index.html';

           
        } else {
            alert('Error al loguear usuario');
        }
    });
});
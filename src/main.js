// Importar estilos
import './styles/main.scss';

// VALIDACIÓN DE FORMULARIO
const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const telefono = document.getElementById('telefono').value.trim();
        const privacy = document.getElementById('privacy').checked;

        // Validaciones
        let isValid = true;
        let errorMessages = [];

        // Validar nombre y apellido
        if (nombre.length < 2) {
            errorMessages.push('El nombre debe tener al menos 2 caracteres');
            isValid = false;
        }

        if (apellido.length < 2) {
            errorMessages.push('El apellido debe tener al menos 2 caracteres');
            isValid = false;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessages.push('El email no es válido');
            isValid = false;
        }

        // Validar contraseña
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            errorMessages.push('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
            isValid = false;
        }

        // Validar teléfono (básico)
        const telefonoRegex = /^\d{9}$/;
        if (!telefonoRegex.test(telefono.replace(/\s/g, ''))) {
            errorMessages.push('El teléfono debe tener 9 dígitos');
            isValid = false;
        }

        // Validar política de privacidad
        if (!privacy) {
            errorMessages.push('Debes aceptar la política de privacidad');
            isValid = false;
        }

        // Mostrar resultado
        if (isValid) {
            alert('¡Registro exitoso! Bienvenido ' + nombre);
            registrationForm.reset();
            // Aquí se enviarían los datos al servidor
        } else {
            alert('Por favor, corrige los siguientes errores:\n\n' + errorMessages.join('\n'));
        }
    });

    // Validación en tiempo real de la contraseña
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => {
            const password = e.target.value;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

            if (password.length > 0) {
                if (passwordRegex.test(password)) {
                    passwordInput.classList.remove('form__input--error');
                    passwordInput.classList.add('form__input--success');
                } else {
                    passwordInput.classList.remove('form__input--success');
                    passwordInput.classList.add('form__input--error');
                }
            } else {
                passwordInput.classList.remove('form__input--error', 'form__input--success');
            }
        });
    }
}



document.addEventListener("DOMContentLoaded", () => {
    console.log("Script cargado exitosamente");
    

    const inputNombre = document.getElementById("nombre");
    const inputApellido = document.getElementById("apellido");
    const inputEmail = document.getElementById("email");
    const inputTelefono = document.getElementById("telefono");
    const inputEdad = document.getElementById("edad");
    const inputDireccion = document.getElementById("direccion");
    const inputProvincia = document.getElementById("provincia");
    const inputCp = document.getElementById("cp");

    const tdNombre = document.getElementById("resumen-nombre");
    const tdApellido = document.getElementById("resumen-apellido");
    const tdEmail = document.getElementById("resumen-email");
    const tdTelefono = document.getElementById("resumen-telefono");
    const tdEdad = document.getElementById("resumen-edad");
    const tdDireccion = document.getElementById("resumen-direccion");
    const tdProvincia = document.getElementById("resumen-provincia");
    const tdCp = document.getElementById("resumen-cp");
    const tdMetodo = document.getElementById("resumen-metodo");
    const tdSuscripcion = document.getElementById("resumen-suscripciones");
    const formJuego = document.getElementById("form-juego");
    const inputNumero = document.getElementById("numero-usuario");
    const btnProbar = document.getElementById("btn-probar-reynoso-4260-07");
    const btnReiniciar = document.getElementById("btn-reiniciar-reynoso-4260-07");
    const spanIntentos = document.getElementById("intentos");
    const spanPuntos = document.getElementById("puntos");
    const spanRecord = document.getElementById("record");
    const mensaje = document.getElementById("mensaje");
    const listaIntentos = document.getElementById("lista-intentos");

    function vincularInput(input, td) {
        if (input && td) {
            input.addEventListener("input", (e) => {
                td.innerText = e.target.value;
            });
        }
    }

    vincularInput(inputNombre, tdNombre);
    vincularInput(inputApellido, tdApellido);
    vincularInput(inputEmail, tdEmail);
    vincularInput(inputTelefono, tdTelefono);
    vincularInput(inputDireccion, tdDireccion);
    vincularInput(inputCp, tdCp);
    vincularInput(inputProvincia, tdProvincia);

    if (inputEdad && tdEdad) {
        inputEdad.addEventListener("input", (e) => {
            const valorEdad = parseInt(e.target.value, 10);
            if (!isNaN(valorEdad) && valorEdad < 18) {
                tdEdad.innerText = `${valorEdad} (Menor de edad)`;
                tdEdad.style.backgroundColor = "#ffcccc";
            } else {
                tdEdad.innerText = e.target.value;
                tdEdad.style.backgroundColor = "";
            }
        });
    }

    const radiosMetodo = document.querySelectorAll('input[name="met_contacto"]');
    if (radiosMetodo.length > 0 && tdMetodo) {
        radiosMetodo.forEach(radio => {
            radio.addEventListener("change", (e) => {
                const label = document.querySelector(`label[for="${e.target.id}"]`);
                tdMetodo.innerText = label ? label.innerText : e.target.value;
            });
        });
        const checkedRadio = document.querySelector('input[name="met_contacto"]:checked');
        if (checkedRadio) {
            const label = document.querySelector(`label[for="${checkedRadio.id}"]`);
            tdMetodo.innerText = label ? label.innerText : checkedRadio.value;
        }
    }

    const checkboxesSuscripcion = document.querySelectorAll('input[name="suscripciones[]"]');
    if (checkboxesSuscripcion.length > 0 && tdSuscripcion) {
        function actualizarSuscripciones() {
            const seleccionados = [];
            checkboxesSuscripcion.forEach(ch => {
                if (ch.checked) {
                    const label = document.querySelector(`label[for="${ch.id}"]`);
                    seleccionados.push(label ? label.innerText : ch.value);
                }
            });
            tdSuscripcion.innerText = seleccionados.join(", ");
        }
        checkboxesSuscripcion.forEach(ch => {
            ch.addEventListener("change", actualizarSuscripciones);
        });
        actualizarSuscripciones();
    }


    const btnLeerMas = document.getElementById("btn-leer-mas-reynoso-4260-07");
    const cvCompleto = document.querySelector(".cv-completo");

    if (btnLeerMas && cvCompleto) {
        btnLeerMas.addEventListener("click", () => {
            if (cvCompleto.style.display === "none" || getComputedStyle(cvCompleto).display === "none") {
                cvCompleto.style.display = "block";
                btnLeerMas.innerText = "Leer menos";
            } else {
                cvCompleto.style.display = "none";
                btnLeerMas.innerText = "Leer más";
            }
        });
    }
});

    if (formJuego && inputNumero && btnReiniciar) {
        const token = "reynoso-4260-07";
        let numeroSecreto;
        let intentos = [];
        let terminado = false;

        function mostrarRecord() {
            const record = localStorage.getItem("record-" + token);
            if (record) {
                spanRecord.innerText = `${record} intentos de ${token}`;
            } else {
                spanRecord.innerText = "Sin récord";
            }
        }

        function iniciarJuego() {
            numeroSecreto = Math.floor(Math.random() * 100) + 1;
            intentos = [];
            terminado = false;
            inputNumero.value = "";
            inputNumero.disabled = false;
            btnProbar.disabled = false;
            spanIntentos.innerText = "0";
            spanPuntos.innerText = "0";
            listaIntentos.innerText = "-";
            mensaje.innerText = "Ingresá un número entre 1 y 100";
            mensaje.className = "mensaje";
            mostrarRecord();
        }

        function terminarJuego() {
            terminado = true;
            inputNumero.disabled = true;
            btnProbar.disabled = true;

            const puntos = Math.max(10, 110 - intentos.length * 10);
            spanPuntos.innerText = puntos;

            const recordGuardado = parseInt(localStorage.getItem("record-" + token), 10);
            if (isNaN(recordGuardado) || intentos.length < recordGuardado) {
                localStorage.setItem("record-" + token, intentos.length);
                mensaje.innerText = `Ganaste en ${intentos.length} intentos! Nuevo récord`;
                mostrarRecord();
            } else {
                mensaje.innerText = `Ganaste en ${intentos.length} intentos!`;
            }
            mensaje.className = "mensaje acierto";
        }

        formJuego.addEventListener("submit", (e) => {
            e.preventDefault();
            if (terminado) return;

            const valor = parseInt(inputNumero.value, 10);

            if (isNaN(valor) || valor < 1 || valor > 100) {
                mensaje.innerText = "El número tiene que estar entre 1 y 100";
                mensaje.className = "mensaje error";
                return;
            }

            if (intentos.includes(valor)) {
                mensaje.innerText = `Ya probaste con el ${valor}`;
                mensaje.className = "mensaje error";
                inputNumero.value = "";
                return;
            }

            intentos.push(valor);
            spanIntentos.innerText = intentos.length;
            listaIntentos.innerText = intentos.join(", ");
            inputNumero.value = "";

            if (valor > numeroSecreto) {
                mensaje.innerText = `${valor} es muy alto`;
                mensaje.className = "mensaje alto";
            } else if (valor < numeroSecreto) {
                mensaje.innerText = `${valor} es muy bajo`;
                mensaje.className = "mensaje bajo";
            } else {
                terminarJuego();
            }
        });

        btnReiniciar.addEventListener("click", iniciarJuego);

        iniciarJuego();
    }

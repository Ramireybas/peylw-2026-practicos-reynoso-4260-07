Reflexión Aplicada - TP5

1- 
`
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
}`

2- El input funciona al mismo momento que se va ingresando los datos mientras que change cambia solo una vez que se haya ingresado todo y que haga clic en el evento. 



3-  Para evitar que el script  arroje errores en la consola al navegar entre diferentes páginas , se implementa  if. De esta forma, antes de que JavaScript intente agregar un escuchador de eventos o modificar un elemento, verifica primero si ese elemento realmente existe en el DOM de la página actual. Si no lo encuentra (porque estamos en otra vista), la condición simplemente se saltea, evitando el error null pointer y permitiendo usar un único archivo script.js de forma limpia y segura para todo el sitio.

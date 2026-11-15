Reflexión Aplicada - TP6

1- Elegí el juego de Adivinanza de Números. El sistema genera un número aleatorio entre 1 y 100 y el usuario tiene que adivinarlo. La página le avisa si el número que ingresó es muy alto o muy bajo y va contando los intentos hasta que acierta.

2- 
```
function mostrarRecord() {
    const record = localStorage.getItem("record-" + token);
    if (record) {
        spanRecord.innerText = `${record} intentos de ${token}`;
    } else {
        spanRecord.innerText = "Sin récord";
    }
}
```
```
const recordGuardado = parseInt(localStorage.getItem("record-" + token), 10);
if (isNaN(recordGuardado) || intentos.length < recordGuardado) {
    localStorage.setItem("record-" + token, intentos.length);
    mensaje.innerText = `Ganaste en ${intentos.length} intentos! Nuevo récord`;
    mostrarRecord();
} else {
    mensaje.innerText = `Ganaste en ${intentos.length} intentos!`;
}
```


3- Para que no se pueda ver el número desde la consola, puse todo el código del juego adentro del DOMContentLoaded y declaré numeroSecreto con let adentro del if del juego. Así la variable no es global y solo la pueden usar las funciones del juego. Tampoco guardé el número en el HTML ni en el localStorage, ahí solamente se guarda los numeros incorrectos.
Agregue algunas validaciones para que no se pueda hacer trampa con los intentos: solo acepta números del 1 al 100, si repetís un número no te lo cuenta y cuando ganás se desactiva el botón Probar hasta que reiniciás.

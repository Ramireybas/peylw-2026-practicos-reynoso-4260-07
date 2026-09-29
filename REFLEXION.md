Reflexión Aplicada - TP3

1- el codigo para definir el campo del codigo postal es 
`
<label for="cp">Código Postal:</label>
<input id="cp" name="codigo_postal" type="text"
       pattern="^[A-Z]\d{4}[A-Z]{3}$"
       placeholder="Ej: R8500AAF"
       title="Formato requerido: Una letra mayúscula, cuatro números y tres letras mayúsculas (ej: R8500AAF)">
`
2-La etiqueta label sirve para crear un texto donde se pueda describir lo que se debe escribir en el campo de un formulario.
El for es el vinculo que une el label y el input correspondiente.

3-Los campos de selección circular(radio) en caso de que comparten el mismo name no dejara seleccionar mas de una opción mientras que en caso de que tengan atributo diferentes el usuario puede seleccionar múltiples opciones. 

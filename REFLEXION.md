Reflexión Aplicada - TP4

1- el código que hace la animación del logo es:
`
.logo-curza {
    height: 40px;
    transition: transform 1s ease-in-out;
}

.logo-curza:hover {
    transform: rotateY(360deg);
}
`

2- Html pone un fondo transparente por defecto y cuando un elemento con posicion sticky se fija en la parte superior al hacer scroll el contenido sigue desplazandose y pasan debajo de el. Si le asignamos un color de fondo solido se crea una capa que aisla el elemento fijo del contenido que se mueve.
Si no se define se produce una superposición visual. Donde se veria el contenido atraves del sticky

3- cambia el menu y ordenan el titulo y los botones uno a bajo de otro,
se ve mas espacio arriba para que el menu no tape las primeras letras y  las tablas se deslizan para que se pueda ver bien en el dispositivo. 

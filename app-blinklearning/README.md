# Proyecto que permite realizar un test de cultura general y proporciona la evaluación del mismo

Este proyecto fue creado en React.js  y utiliza varias libeerías que se pueden ver en el package.json
Es la versión 1.0.0 del mismo y entre sus funcionalidades tiene una página principal a la que se
accede por defecto y desde la cual se accede al test sino se ha hecho o las resultados si ya se terminó el test
En resultados y en el test hay un header que permite navegar a home, cambiar a modo claro o oscuro y mostrar la ubicación en 
que nos encontramos
En el test se implementa un sencillo drag & drop para seleccionar la respuesta
Es obligatorio responder para pasar a la siguiente pregunta y se va mostrando el progreso
Al guardar se va a la página de resultados donde se muestra la evaluación obtenida y ya no es posible volver a realizar el ejercicio a  no ser que se recargue la aplicación
Estuve indecisa si guardar en el local storage cuando se termina el ejercicio para que no pudiera realizarse aunque se recargara el mismo  pero opté por esta vía.
Si era de la otra manera basta que en el reduce se guarde en el localstorage isFinish y que al iniciar el estado por defecto se lea lo que está en el local storage
Si el usuario lo desea puede ver en una tabla las respuestas correctas y cuales tuvo bien o mal.

## Para correr el proyecto

### `npm install`

### `npm start`




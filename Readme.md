<h1> Desafío Amigo Secreto. Aplicación en JavaScript </h1>

Descripción

Esta es una aplicación web interactiva para organizar un sorteo de amigo secreto de manera sencilla. Permite a los usuarios agregar participantes, visualizar la lista de amigos y asignar aleatoriamente un amigo secreto.

Características

Agregar participantes de manera dinámica.
Asignar aleatoriamente amigos secretos sin repetir.
Seleccionar aleatoriamente un participante de la lista.
Interfaz basada en HTML, CSS y JavaScript sin necesidad de librerías externas.

Instalación y Ejecución

Clona este repositorio o descarga los archivos.
Asegúrate de tener un navegador web actualizado.
Abre el archivo index.html en el navegador.
Ingresa los nombres de los participantes y usa las opciones disponibles para seleccionar un amigo aleatorio.

Estructura del Proyecto

/ (Raíz del proyecto)
│── index.html  # Estructura principal de la aplicación
│── styles.css  # Estilos para la interfaz 
│── script.js   # Lógica en JavaScript para el sorteo

Uso

Ingresa los nombres de los participantes en el campo de texto y haz clic en "Agregar".
Una vez agregados todos los participantes, haz clic en "Sortear Amigo" para realizar la asignación aleatoriamente.
Los resultados se mostrarán en la consola del navegador o en el DOM según la implementación.

Posibles Problemas y Soluciones

1. No se muestra la lista de participantes
Asegúrate de que el elemento con id="listaAmigos" existe en el index.html.
Revisa la consola del navegador (F12 -> Consola) para verificar errores.

2. No se asignan amigos secretos correctamente
Verifica que haya al menos dos participantes antes de asignar.
Asegúrate de que la función sortearAmigo() está correctamente vinculada al botón.

3. No funciona el sorteo aleatorio
Asegúrate de que haya al menos un participante en la lista antes de realizar el sorteo.

Autor

Francisco Ramírez Proyecto desarrollado para prácticas en JavaScript.

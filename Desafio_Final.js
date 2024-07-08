// Variables
let numeroMaximoPosible = 1000; // Cambiado a 1000
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;

while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
    
    // Verifica si la entrada del usuario es un número válido
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > numeroMaximoPosible) {
        alert(`Por favor, introduce un número válido entre 1 y ${numeroMaximoPosible}.`);
        continue;
    }

    if (numeroUsuario === numeroSecreto) {
        // Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        // Incrementamos el contador cuando no acierta
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}
/* 
Cambios Realizados:
Rango de Número Secreto:

Cambié numeroMaximoPosible de 100 a 1000 para ajustar el rango del número secreto.
Validación de Entrada del Usuario:

Agregué una verificación para asegurar que el numeroUsuario sea un número válido entre 1 y numeroMaximoPosible. Si la entrada no es válida, se muestra un mensaje de error y el bucle while continúa sin incrementar el contador de intentos.
Estructura del Código:

Reorganicé el código para una mejor legibilidad, añadiendo comentarios y agrupando la lógica en bloques claros.
Explicación del Código Modificado:
Inicialización de Variables:

numeroMaximoPosible se establece en 1000.
numeroSecreto se genera aleatoriamente entre 1 y 1000.
numeroUsuario se inicializa en 0.
intentos se inicializa en 1 para contar los intentos del usuario.
maximosIntentos se establece en 6 para limitar el número de intentos.
Bucle while:

El bucle continúa hasta que el usuario adivine el número secreto (numeroUsuario !== numeroSecreto).
Se pide al usuario que introduzca un número entre 1 y numeroMaximoPosible.
Validación de Entrada:

Se verifica que la entrada del usuario es un número válido dentro del rango especificado. Si no lo es, se muestra un mensaje de error y el bucle continúa.
Verificación del Número Secreto:

Si el usuario adivina el número (numeroUsuario === numeroSecreto), se muestra un mensaje de éxito y se termina el bucle.
Si no adivina, se indica si el número secreto es mayor o menor.
El contador de intentos se incrementa en cada intento fallido.
Límite de Intentos:

Si el número de intentos excede maximosIntentos, se muestra un mensaje indicando que se ha alcanzado el número máximo de intentos y se rompe el bucle.
Este código debería funcionar correctamente para un rango de números de 1 a 1000 y proporciona una mejor validación de entrada para asegurar que el usuario introduce un número válido.
*/







/**
 * Given a number, return the number divided into its halves in an array.
 
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

1. Preparar constantes.
2. prepararfunciones
3. Obtener la mitad de un número
4. Agregar a  un arr
5. x2
6. Regresar el array final

 */

const n1=4;
const n2 = 10;
const n3 = 20;

function numDiv(number) {
    let half = number /2;
    return [half, half];
}

console.log(numDiv(n1));
console.log(numDiv(n2));
console.log(numDiv(n3));

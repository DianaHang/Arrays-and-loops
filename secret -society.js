
/**
 * Find the name of a secret society based on the first letter of each member's name.

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
 */



/**
 *  1. Preparar constantes.
 *  2. Preparar funciones.
 * 3. Obtener la primer letra de cada nombre.
 * 4. Ordernar alfabéticamente.
 * 5. Imprimir.
 */

const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const member3 = ['Harry', 'Ron', 'Hermione'];

function secretName(arr) {
    let res = [];
    arr.forEach((element) => res.push(element.charAt(0)));
    return res.sort().join(" ");
}

console.log(secretName(member1));
console.log(secretName(member2));
console.log(secretName(member3));
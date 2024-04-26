// Exercise 1: Sum of Resistors in Series

/**Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
*/

let res1 =  [-1, 5, 6, 13];
let res2 = [14, 3.5, 6];
let res3 = [8, 15, 100];

function sumResistance(arr) {
    const arr2 = [];
    let res = 0;
    arr.forEach(element => arr2.push(Math.abs(element)));
    arr2.forEach(element => (res = res + element));
    console.log(res + " Ohms");

}


function sumaResistance2 (arr) {
    let res = 0;
    for (let i=0; i<arr.length; i++) {
        res = res + Math.abs(arr[1]);
    }    
    return res;
}


sumResistance(res3);
const resultado = sumaResistance2(res1);
console.log(resultado);


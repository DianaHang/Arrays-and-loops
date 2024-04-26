/**
 * Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.


Obtener conteo total
Imprimir usuario user == 1
Imprimir primeras 2 personas users ==2
Imprimir primeras 2 personas + conteo user >= 2
 */

const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];

function displayUsers(arr) {
    const count = users.length;
    let res;
    if (count ===1) {
        res = `${arr[0]} is online`;
    }
    else if (count === 2) {
            res = `${arr[0]}, ${arr[1]} are online`;
        }
    else {
        res = `${arr[0]}, ${arr[1]} and ${count-2} more are online`;
    } 
    return res; 
    }

    console.log(displayUsers(users));

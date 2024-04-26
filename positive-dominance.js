/**
 * Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 */

function positiveDom(arr) {
    let count = 0;
    arr.forEach(element => {
        if (element > 0) {
            count++;
        }
    });
    if (count > arr.length) {
        return true;
    } else {
        return false;
    }
}
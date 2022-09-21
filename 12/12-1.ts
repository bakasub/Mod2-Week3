// input: arr = [1, 2, 5, 6, 7, 10]
// output: [3, 4, 8, 9]

function findMissingNumber(input: number[]): number[] {
    let i: number = 1;
    let arr: number[] = [];
    while (i <= 10) {
        if (input.indexOf(i) == -1) {
            arr.push(i)
        }
        i++;
    }
    return arr
}

console.log(findMissingNumber([1, 2, 5, 6, 7, 10]))
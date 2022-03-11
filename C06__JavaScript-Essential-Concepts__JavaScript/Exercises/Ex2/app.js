function reversibleInclusiveList(num1, num2){
    const array = [];
    if (num1 > num2){
        let i = 0; num1 <= num2; i++;
        array.push(i)
    } else (num1 < num2){
        let i = 0; num1 >= num2; i--;
        array.push(i)
    }
    return array;
}

const countDown = reversibleInclusiveList(1, 5);

console.log('countDown:', countDown);


// reversibleInclusiveList(1, 5)    ➞    [1, 2, 3, 4, 5]

// reversibleInclusiveList(2, 8)    ➞    [2, 3, 4, 5, 6, 7, 8]

// reversibleInclusiveList(10, 20)    ➞   [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// reversibleInclusiveList(24, 17)    ➞   [24, 23, 22, 21, 20, 19, 18, 17]

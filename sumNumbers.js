function sumNumbers(input) {
    let num = input[0];
    let sum = 0;
    let index = 1;
    let newNum = Number(input[index]);

    while (sum < num) {
        sum += newNum;
        index++;
        newNum = Number(input[index]);
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"])
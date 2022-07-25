function maxNumber(input) {
    let element = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (element !== "Stop") {
        let newNum = Number(element);

        if (newNum > max) {
            max = newNum;
        }
        element = input[index];
        index++;
    }
    console.log(max);
}

maxNumber(["100", "99", "80", "70", "Stop"])
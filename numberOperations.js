function numOperations(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenNum = "";

    if (operator === "+") {
        result = num1 + num2;
        if (result % 2 === 0) {
            evenNum = "even"
        } else {
            evenNum = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenNum}`);
    } else if (operator === "-") {
        result = num1 - num2;
        if (result % 2 === 0) {
            evenNum = "even"
        } else {
            evenNum = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenNum}`);
    } else if (operator === "*") {
        result = num1 * num2;
        if (result % 2 === 0) {
            evenNum = "even"
        } else {
            evenNum = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenNum}`);
    } else if (operator === "/") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            result = (num1 / num2).toFixed(2);
            console.log(`${num1} ${operator} ${num2} = ${result}`);
        }

    } else if (operator === "%") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            result = num1 % num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
        }
    }


}

numOperations(["10", "0", "/"])
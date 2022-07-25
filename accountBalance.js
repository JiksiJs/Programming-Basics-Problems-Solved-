function balance(input) {
    let currentMoney = input[0];
    let sum = 0;
    let index = 1;

    while (currentMoney !== "NoMoreMoney") {
        let newMoney = Number(currentMoney);

        if (newMoney < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        sum += newMoney;
        console.log(`Increase: ${newMoney.toFixed(2)}`);
        currentMoney = input[index];
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

balance(["5.51", "69.42", "100", "NoMoreMoney"])
function test(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let firstEvenMoney = 10;
    let toys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money = money + firstEvenMoney;
            firstEvenMoney = firstEvenMoney + 10;
            money = money - 1;
        } else {
            toys++;
        }
    }

    let totalMoney = toys * toyPrice + money;

    if (totalMoney >= washerPrice) {
        console.log(`Yes! ${Math.abs(totalMoney - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(totalMoney - washerPrice).toFixed(2)}`);
    }
}

test(["10", "170.00", "6"]);
function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let toysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;

    let puzzlePrice = puzzleCount * 2.60;
    let dollPrice = dollCount * 3;
    let bearPrice = bearCount * 4.10;
    let minionPrice = minionCount * 8.20;
    let truckPrice = truckCount * 2;

    let totalPrice = puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice;

    if (toysCount >= 50) {
        totalPrice = totalPrice - (totalPrice * 0.25);
    }

    let rent = totalPrice * 0.1;
    let finalSum = totalPrice - rent;

    if (finalSum >= holidayPrice) {
        console.log(`Yes! ${(finalSum - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - finalSum).toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"])
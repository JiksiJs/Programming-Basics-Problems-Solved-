function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let memory = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let processorsPrice = (videoCardsPrice * 0.35) * processors;;
    let memoryPrice = (videoCardsPrice * 0.1) * memory;

    let sum = videoCardsPrice + processorsPrice + memoryPrice;

    if (videoCards > processors) {
        sum = sum - (sum * 0.15);
    }

    let diff = Math.abs(budget - sum).toFixed(2);

    if (budget >= sum) {
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45", "3", "1", "1"])
function godzilla(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.1;
    let discount = 0;

    let clothesSum = statists * clothesPrice;

    if (statists > 150) {
        discount = clothesSum * 0.1;
        clothesSum = clothesSum - discount;
    }

    let finalSum = clothesSum + decor;

    if (finalSum <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - finalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(finalSum - budget).toFixed(2)} leva more.`);
    }
}

godzilla(["20000", "120", "55.5"])
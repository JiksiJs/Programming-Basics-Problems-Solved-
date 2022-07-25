function newHouse(input) {
    let typeFlower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (typeFlower) {
        case "Roses":
            price = quantity * 5;
            if (quantity > 80) {
                price = price * 0.90;
            }
            break;
        case "Dahlias":
            price = quantity * 3.80;
            if (quantity > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips":
            price = quantity * 2.80;
            if (quantity > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus":
            price = quantity * 3;
            if (quantity < 120) {
                price = price + (price * 0.15);
            }
            break;
        case "Gladiolus":
            price = quantity * 2.50;
            if (quantity < 80) {
                price = price + (price * 0.2);
            }
            break;
    }

    let diff = Math.abs(price - budget);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${quantity} ${typeFlower} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }


}

newHouse(["Roses", "55", "250"])
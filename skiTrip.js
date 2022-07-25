function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];

    let nights = days - 1;
    let price = 0;
    let discount = 0;

    switch (roomType) {
        case "room for one person":
            price = nights * 18;
            break;
        case "apartment":
            price = nights * 25;
            if (days < 10) {
                discount = price * 0.3;
            } else if (days >= 10 && days <= 15) {
                discount = price * 0.35;
            } else if (days > 15) {
                discount = price * 0.5;
            }
            break;
        case "president apartment":
            price = nights * 35;
            if (days < 10) {
                discount = price * 0.1;
            } else if (days >= 10 && days <= 15) {
                discount = price * 0.15;
            } else if (days > 15) {
                discount = price * 0.2;
            }
            break;
    }

    let finalPrice = price - discount;

    if (grade === "positive") {
        finalPrice = finalPrice + (finalPrice * 0.25);
    } else if (grade === "negative") {
        finalPrice = finalPrice - (finalPrice * 0.1);
    }

    console.log(finalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"])
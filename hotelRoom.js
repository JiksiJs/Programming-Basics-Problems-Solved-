function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartPrice = 0;
    let price = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = nights * 50;
            apartPrice = nights * 65;

            if (nights > 7 && nights <= 14) {
                studioPrice = studioPrice - (studioPrice * 0.05);

            } else if (nights > 14) {
                studioPrice = studioPrice - (studioPrice * 0.3);

            }
            break;
        case "June":
        case "September":
            studioPrice = nights * 75.20;
            apartPrice = nights * 68.70;
            if (nights > 14) {
                studioPrice = studioPrice - (studioPrice * 0.2);
            }
            break;
        case "July":
        case "August":
            studioPrice = nights * 76.00;
            apartPrice = nights * 77.00;
            break;
    }
    if (nights > 14) {
        apartPrice = apartPrice - (apartPrice * 0.1);
    }
    console.log(`Apartment: ${apartPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"])
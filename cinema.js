function cinema(input) {
    let nightType = input[0];
    let rows = Number(input[1]);
    let collumns = Number(input[2]);

    let ticket = 0;

    if (nightType === "Premiere") {
        ticket = 12;
    } else if (nightType === "Normal") {
        ticket = 7.50;
    } else if (nightType === "Discount") {
        ticket = 5;
    }

    let price = rows * collumns * ticket;
    console.log(price.toFixed(2));
}

cinema(["Premiere", "10", "12"])
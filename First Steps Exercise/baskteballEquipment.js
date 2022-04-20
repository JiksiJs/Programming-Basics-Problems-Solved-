function baskteballEquipment(input) {
    let yearTax = Number(input[0]);

    let shoes = yearTax - (yearTax * 0.40);
    let clothes = shoes - (shoes * 0.20);
    let ball = clothes * 0.25;
    let extras = ball * 0.20;

    let price = yearTax + shoes + clothes + ball + extras;
    console.log(price);
}

baskteballEquipment(["365"])
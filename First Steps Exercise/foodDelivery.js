function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);

    let chickenPrice = chickenMenus * 10.35;
    let fishPrice = fishMenus * 12.40;
    let veggiePrice = veggieMenus * 8.15;

    let foodPrice = chickenPrice + fishPrice + veggiePrice;
    let dessert = foodPrice * 0.2;
    let delivery = 2.50;

    let finalPrice = foodPrice + dessert + delivery;
    console.log(finalPrice);
}

foodDelivery(["9", "2", "6"])
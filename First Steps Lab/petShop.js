function petShop(input) {
    let dogCans = Number(input[0]);
    let catCans = Number(input[1]);

    let dogFood = dogCans * 2.50;
    let catFood = catCans * 4;
    let finalPrice = dogFood + catFood;

    console.log(`${finalPrice} lv.`);
}
petShop(["5", "4"])
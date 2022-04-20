function yardGreening(input) {
    let metersGreen = Number(input[0]);

    let firstPrice = metersGreen * 7.61;
    let discount = firstPrice * 0.18;
    let finalPrice = firstPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);


}

yardGreening(["550"])
function schoolSupplies(input) {
    let penPacks = Number(input[0]);
    let sharpiesPack = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = penPacks * 5.80;
    let sharpiesPrice = sharpiesPack * 7.20;
    let cleanerPrice = boardCleaner * 1.20;
    let fullPrice = pensPrice + sharpiesPrice + cleanerPrice;

    let newDiscount = discount / 100;

    let finalPrice = fullPrice - (fullPrice * newDiscount);
    console.log(finalPrice);
}
schoolSupplies(["2", "3", "4", "25"])
function depositCalc(input) {
    let deposit = Number(input[0]);
    let dateDeposit = Number(input[1]);
    let yearTax = Number(input[2]);

    let interest = deposit * (yearTax / 100);
    let monthInterest = interest / 12;

    let finalSum = deposit + (dateDeposit * monthInterest);
    console.log(finalSum);
}
depositCalc(["200", "3", "5.7"])
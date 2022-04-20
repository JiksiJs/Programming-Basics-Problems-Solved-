function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let extraPercent = Number(input[3]);

    let obem = length * width * height;
    let obemLitri = obem / 1000;
    let extraStuff = extraPercent / 100;

    let litriNeeded = obemLitri * (1 - extraStuff);
    console.log(litriNeeded);
}

fishTank(["85", "75", "47", "17"])
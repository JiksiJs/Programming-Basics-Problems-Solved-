function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let mixer = Number(input[2]);
    let hours = Number(input[3]);

    let extraPaint = paint * 0.10;
    let extraNylon = 2.0;
    let bags = 0.40;

    let finalNylon = (nylon + extraNylon) * 1.50;
    let finalPaint = (paint + extraPaint) * 14.50;
    let finalMixer = mixer * 5.0;

    let toolsPrice = finalNylon + finalPaint + finalMixer + bags;
    let workMen = (toolsPrice * 0.3) * hours;

    let finalPrice = toolsPrice + workMen;
    console.log(finalPrice);
}

repainting(["10", "11", "4", "8"])
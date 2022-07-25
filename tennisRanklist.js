function tennis(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let points = 0;
    let countWin = 0;

    for (let i = 0; i < tournaments; i++) {
        let position = input[index];
        index++;

        switch (position) {
            case "W":
                points += 2000;
                countWin++;
                break;
            case "F":
                points += 1200;
                break;
            case "SF":
                points += 720;
                break;
        }

    }

    let finalPoints = startPoints + points;
    let avgPoints = points / tournaments;
    let winPercent = countWin / tournaments * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winPercent.toFixed(2)}%`);
}

tennis(["5", "1400", "F", "SF", "W", "W", "SF"])
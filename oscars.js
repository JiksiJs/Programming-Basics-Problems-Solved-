function test(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let startPoints = Number(input[index]);
    index++;
    let judgeNumber = Number(input[index]);
    index++;
    let isNominee = false;


    for (let i = 0; i < judgeNumber; i++) {
        let judgeName = input[index];
        index++;
        let judgePoints = Number(input[index]);
        index++;

        startPoints += (judgeName.length * judgePoints) / 2;

        if (startPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startPoints}!`);
            isNominee = true;
            break;
        }
    }

    if (!isNominee) {
        let diff = 1250.5 - startPoints;
        console.log(`Sorry, ${actorName} you need ${diff} more!`);
    }
}


test(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])
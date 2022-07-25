function trekkingMania(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;

    let musala = 0;
    let monBlan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    for (let i = 0; i < groups; i++) {
        let climbers = Number(input[index]);
        index++;

        totalPeople = totalPeople + climbers;

        if (climbers <= 5) {
            musala = musala + climbers;
        } else if (climbers >= 6 && climbers <= 12) {
            monBlan = monBlan + climbers;
        } else if (climbers >= 13 && climbers <= 25) {
            kilimanjaro = kilimanjaro + climbers;
        } else if (climbers >= 26 && climbers <= 40) {
            k2 = k2 + climbers;
        } else {
            everest = everest + climbers;
        }
    }


    let musalaPercent = musala / totalPeople * 100;
    let monBlanPercent = monBlan / totalPeople * 100;
    let kilimanjaroPercent = kilimanjaro / totalPeople * 100;
    let k2Percent = k2 / totalPeople * 100;
    let everestPercent = everest / totalPeople * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monBlanPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["5", "25", "41", "31", "250", "6"])
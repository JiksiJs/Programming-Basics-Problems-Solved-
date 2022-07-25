function lunchBreak(input) {
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 0.125;
    let breathTime = breakTime * 0.25;

    let lunchPlusBreathTime = lunchTime + breathTime;
    let timeLeft = breakTime - lunchPlusBreathTime; srfg

    if (timeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLength - timeLeft)} more minutes.`);
    }
}

lunchBreak(["Game of thrones", "60", "96"])
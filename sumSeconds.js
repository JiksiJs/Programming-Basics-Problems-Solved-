function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let timeInSeconds = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(timeInSeconds / 60); // VZIMAME MINUTITE
    let seconds = timeInSeconds % 60; // VZIMAME SEKUNDITE

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds(["35", "45", "44"])
function swimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeSecondsForOneMeter = Number(input[2]);

    let personTime = distanceInMeters * timeSecondsForOneMeter; // Presmqtame vremeto za koeto prepluva razstoqnieto
    let timeBehind = Math.floor(distanceInMeters / 15) * 12.5.toFixed(2); // Presmqtame vremeto s koeto se zabavq

    let totalTime = personTime + timeBehind; // Obshtoto vreme (vremeto na choveka + vremeto za zabavqne)

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else if (totalTime >= recordInSeconds) {
        let diff = Math.abs(recordInSeconds - totalTime).toFixed(2);
        console.log(`No, he failed! He was ${diff} seconds slower.`);
    }
}

swimmingRecord(["10464", "1500", "20"])



// VTORI NACHIN ZA RESHAVANE
/*
let delay = Math.floor(distanceInMeters / 15); // Presmqtame kolko puti shte bude zabaven
let delayInSec = delay * 12.5; // Broi put zabavaniq * vremeto za edno zabavqne
let time = distanceInMeters * timeSecondsForOneMeter + delayInSec; // Obshtoto vreme za koeto izminava distanciqta
*/
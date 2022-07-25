function time(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMins = hours * 60 + minutes; // Rabotim v EDNA MERNA EDINICA (Minuti)

    let newTimeInMins = timeInMins + 15; // Dobavqme 15-te minuti kum tekushtoto vreme

    let newHours = Math.floor(newTimeInMins / 60); // Vzimame chasovete
    let newMinutes = newTimeInMins % 60; // Vzimame minutite

    if (newHours >= 24) {
        newHours = 0;
    }

    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
    } else {
        console.log(`${newHours}:${newMinutes}`);
    }


}

time(["1", "46"])
function bonusScore(input) {
    let number = Number(input[0]);
    let bonus = 0;

    if (number <= 100) {
        bonus = 5;
    } else if (number <= 1000) {
        bonus = number * 0.2;
    } else {
        bonus = number * 0.1;
    }

    if (number % 2 === 0) {
        bonus = bonus + 1;
    } else if (number % 5 === 0) {
        bonus = bonus + 2;
    }

    let sum = number + bonus;
    console.log(bonus);
    console.log(sum);

}

bonusScore(["20"])
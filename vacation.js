function vacation(input) {
    let index = 0;
    let holidayMoney = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;

    let totalDays = 0;
    let daysSpend = 0;

    while (currentMoney < holidayMoney) {
        let action = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        totalDays++;

        switch (action) {
            case 'save':
                currentMoney += money;
                daysSpend = 0;
                break;
            case 'spend':
                daysSpend++;
                currentMoney -= money;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                break;
        }

        if (daysSpend === 5) {
            console.log("You can't save the money.");
            console.log(`${totalDays}`);
            break;
        }
    }

    if (currentMoney >= holidayMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation(['2000', '1000', 'spend', '1200', 'save', '2000'])
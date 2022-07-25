function salary1(input) {
    let index = 0;
    let tabsOpen = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let isHaveSalary = true;

    for (let i = 0; i < tabsOpen; i++) {
        let tabName = input[index];
        index++;

        switch (tabName) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            isHaveSalary = false;
            break;
        }
    }

    if (isHaveSalary) {
        console.log(salary);
    }

}

salary1(["3", "500", "Github.com", "Facebook", "afk"])


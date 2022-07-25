function examPrep(input) {
    let index = 0;
    let badGrades = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let counter = 0;
    let isNeedBreak = false;
    let counterProblems = 0;
    let sumGrade = 0;
    let lastProblem = "";

    while (command !== "Enough") {
        let taskName = command;
        let grade = Number(input[index]);
        index++;
        lastProblem = taskName;
        sumGrade += grade;
        counterProblems++;

        if (grade <= 4) {
            counter++;
        }

        if (counter === badGrades) {
            console.log(`You need a break, ${counter} poor grades.`);
            isNeedBreak = true;
            break;
        }

        command = input[index];
        index++;
    }
    let avg = sumGrade / counterProblems;

    if (!isNeedBreak) {
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${counterProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPrep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
function pass(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    let passTry = input[index];

    while (passTry !== password) {
        passTry = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

pass(["Nakov", "1234", "1324", "1234"])
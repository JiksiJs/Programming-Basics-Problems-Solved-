function vowelsSum(input) {
    let text = input[0];

    let result = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i]; // vsqka bukva e v tazi promenliva ( moje da se reshi s if-else)

        switch (char) {
            case "a":
                result += 1;
                break;
            case "e":
                result += 2;
                break;
            case "i":
                result += 3;
                break;
            case "o":
                result += 4;
                break;
            case "u":
                result += 5;
                break;
        }
    }
    console.log(result);
}

vowelsSum(["hello"])
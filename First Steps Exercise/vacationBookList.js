function bookList(input) {
    let pageCount = Number(input[0]);
    let pagesHour = Number(input[1]);
    let days = Number(input[2]);

    let time = pageCount / pagesHour;
    let hours = time / days;
    console.log(hours);
}
bookList(["212", "20", "2"])
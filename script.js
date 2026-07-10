function handleSubmit(event) {
    event.preventDefault();

    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);

    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
    }

    document.getElementById("result").innerHTML =
        "Tổng các số chia hết cho 3 từ " + start + " đến " + end + " là: " + sum;
}

function addDate(e) {
    e.preventDefault();

    let date = [];
    let getDate = document.getElementById('birth').value;
    date.push(getDate);
    submitForm.reset();

    let milisecondsBetweenDOBand1970 = Date.parse(date);
    let milisecondsBetweenNowAnd1970 = Date.now();
    let ageInMiliseconds = milisecondsBetweenNowAnd1970 - milisecondsBetweenDOBand1970;

    let miliseconds = ageInMiliseconds;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = day * 365;
    let years = Math.round(miliseconds/year);
    let months = years * 12;
    let days = years * 365;
    let hours = Math.round(miliseconds/hour)
    let seconds = Math.round(miliseconds/second)

    let message = `
        <p>Age in years: ${years}<p/>
        <p>Age in months: ${months}<p/>
        <p>Age in days: ${days}<p/>
        <p>Age in hours: ${hours}<p/>
        <p>Age in seconds: ${seconds}<p/>
        <p>Age in miliseconds: ${miliseconds}<p/>
    `

    document.getElementById("results").innerHTML = message;
}

let submitForm = document.getElementById("addBirthDate");
submitForm.addEventListener('submit', addDate);
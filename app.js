

const AgeCalc = () => {
    var getInput = document.getElementById("inp");
    var getOutput = document.getElementById("Output");

    var userBirthOfDate = getInput.value;
    var currentDate = new Date;
    var currentYear = currentDate.getFullYear();
    var userAge = currentYear - userBirthOfDate;
    getOutput.innerHTML= `<p>You Are ${userAge} Years Old...!</p>`;
    getInput.value = "";
}
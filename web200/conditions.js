const calculateButton = document.getElementById("calculateBtn");

calculateButton.addEventListener("click", function () {

    const score = Number(document.getElementById("score").value);
    const result = document.getElementById("result");
    const feedback = document.getElementById("feedback");

    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    switch (grade) {
        case "A":
            feedback.textContent = "Excellent work! Keep it up!";
            break;

        case "B":
            feedback.textContent = "Good job! You are doing well.";
            break;

        case "C":
            feedback.textContent = "You passed, but there is room for improvement.";
            break;

        case "D":
            feedback.textContent = "You passed, but you should study more.";
            break;

        case "F":
            feedback.textContent = "You did not pass. Keep practicing and try again.";
            break;

        default:
            feedback.textContent = "Please enter a valid score.";
    }

    result.textContent = "Your grade is: " + grade;
});

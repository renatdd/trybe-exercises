let score;
score = 900;

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("A");
        break;
    case (score >= 80 && score < 90):
        console.log("B");
        break;
    case (score >= 70 && score < 80):
        console.log("C");
        break;
    case (score >= 60 && score < 70):
        console.log("D");
        break;
    case (score >= 50 && score < 60):
        console.log("E");
        break;
    case (score < 50 && score >= 0):
        console.log("F");
        break;
    default:
        console.log("ERROR: " + score + " is not a valid number to return a grade. Values of score must be between 0 and 100 or equal to these numbers.");
}
// Data 1
let dolphinsAvgScore1 = (96 + 108 + 89) / 3;
let koalasAvgScore1 = (88 + 91 + 110) / 3;

// Data 2
let dolphinsAvgScore2 = (97 + 112 + 101) / 3;
let koalasAvgScore2 = (109 + 95 + 123) / 3;

// Data 3
let dolphinsAvgScore3 = (97 + 112 + 101) / 3;
let koalasAvgScore3 = (109 + 95 + 106) / 3;

const minimumScore = 100;

function determineWinner(dolphinsAvgScore, koalasAvgScore) {
    if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= minimumScore) {
        console.log("Dolphins are the winners!");
    } else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= minimumScore) {
        console.log("Koalas are the winners!");
    } else if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore >= minimumScore && koalasAvgScore >= minimumScore) {
        console.log("It's a draw!");
    } else {
        console.log("No team wins the trophy");
    }
}

determineWinner(dolphinsAvgScore1, koalasAvgScore1); 
determineWinner(dolphinsAvgScore2, koalasAvgScore2); 
determineWinner(dolphinsAvgScore3, koalasAvgScore3); 

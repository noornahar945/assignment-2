function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals === "number" && typeof teamBGoals === "number" && !isNaN(teamAGoals, teamBGoals)) {
        console.log("valid");
        if (teamAGoals > teamBGoals && teamAGoals !== teamBGoals) {

            return "Team A Won";
        }
        else if (teamAGoals <teamBGoals && teamAGoals !== teamBGoals){
            return "Team B Won";
        }
        else if(teamAGoals === teamBGoals){
            return "Draw";
        }
    }
    else {
        console.log("invalid");

    }


}
console.log(matchWinner(2, 1));
console.log(matchWinner(3, 5));
console.log(matchWinner(3, 3));
console.log(matchWinner("3", 3));

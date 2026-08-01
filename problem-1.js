function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals === "number" && typeof teamBGoals === "number"  ) {
       
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
        
        return "Invalid";

    }
}
// console.log(matchWinner(2, 1));
// console.log(matchWinner(3, 5));
// console.log(matchWinner(3, 3));
// console.log(matchWinner("3", 3));


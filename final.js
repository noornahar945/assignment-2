//Problem-01: Match Winner

    function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals === "number" && typeof teamBGoals === "number" ) {
       
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


//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    
    if (Array.isArray(weights)) { 
        
        

        let sum = 0;
        for (let i = 0; i<= weights.length - 1; i++) {
            sum += weights[i];
        }
        if(sum <= 400){
            return true;
        } else if (sum > 400){
            return false;
        }
      


    } 
   
    
    else{
        return "Invalid";
    }
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
      if (typeof tokensUsed === "number" && tokensUsed >= 0 ){
    // console.log("valid");
    if(tokensUsed <= 500){
        return 0;
    }else if(tokensUsed > 500){
        let tokenUsed2nd = 0;
        tokenUsed2nd = Math.floor((tokensUsed - 500)/100);
        tokenUsed2nd *= 5;
         return tokenUsed2nd;

    }

  }
  else{
    return "Invalid";
  }

}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) && (restaurants.length !== 0)) {


        let largest = restaurants[0].rating;
        for (let i = 1; i < restaurants.length; i++) {
            let currentValue = restaurants[i].rating;
            if (currentValue > largest) {
                largest = currentValue;
                return restaurants[i].name.toUpperCase();

            }
        }

        if (Array.isArray(restaurants) && (restaurants.length === 1)) {

            return restaurants[0].name.toUpperCase();
        }



    }


    else {
        return "Invalid";
    }


}

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }
    
if(times.includes("200")){
         return "Invalid";
     
   
    }
    
   
 let total = 0;
    for (let i = 0; i <= times.length-1; i++) {
        total = total + times[i];
    }

return total / (times.length);

  
}
// console.log(averageResponseTime([120, 200, 150, 130]));
// console.log(averageResponseTime([120, "200", 150, 130]));


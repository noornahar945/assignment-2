function isElevatorSafe(weights) {
  
    if (Array.isArray(weights)) { 
        
        console.log("valid");
        let sum = 0;
        for (let i = 0; i<= weights.length - 1; i++) {
            sum += weights[i];
        }
      


    } 
   
    
    else{
        return "Invalid";
    }
    
}
console.log(isElevatorSafe([20,35,40,50]));
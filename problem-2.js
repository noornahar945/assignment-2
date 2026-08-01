  
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
console.log(isElevatorSafe("566677789o90"));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe([20,30,50,60,55]));
console.log(isElevatorSafe([20,30,50,60,550]));

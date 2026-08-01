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


console.log(calculateAiCost(600));
console.log(calculateAiCost(-10));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(500));

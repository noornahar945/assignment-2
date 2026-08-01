function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed === "number" && tokensUsed >= 0 ){
    return "valid";
  }
  else{
    return "Invalid";
  }
}


console.log(calculateAiCost(0));

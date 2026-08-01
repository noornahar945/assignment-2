function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }
    for (let i=0;i<=times.length-1;i++){
if(times.includes(" times[i] ")){
         return "Invalid";
     }
   
    }
    
   
 let total = 0;
    for (let i = 0; i <= times.length-1; i++) {
        total = total + times[i];
    }

return total / (times.length);

  
}
console.log(averageResponseTime([120, 200, 150, 130]));
console.log(averageResponseTime([120, "200", 150, 130]));
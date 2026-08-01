function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) && (restaurants.length !== 0)){
        // console.log('valid');

  let largest = restaurants[0].rating;
  for (let i = 1; i < restaurants.length; i++) {
    let currentValue = restaurants[i].rating;
    if (currentValue > largest) {
      largest = currentValue;
      return restaurants[i].name.toUpperCase() ;

    }
    
    

  }
//   return largest.name;

}

       
    else{
        return "Invalid";
    }     

    
}
// console.log(topRatedRestaurant(888));
console.log(topRatedRestaurant([7,888,90,098,90]));
console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));


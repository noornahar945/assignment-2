function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) && (restaurants.length !== 0)){
        console.log('valid');
        
        for(let i=0; i<=restaurants.length-1;i++){
            console.log(restaurants[i]);
            if(restaurants[0].rating > restaurants[i-(restaurants.length-1).rating] ){
                return "good";
            }
        }
    }
    else{
        return "Invalid";
    }
}
// console.log(topRatedRestaurant(888));
console.log(topRatedRestaurant([7,888,90,098,90]));
console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));


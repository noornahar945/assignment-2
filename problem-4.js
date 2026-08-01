function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) && (restaurants.length !== 0)){
        console.log('valid');
    }
    else{
        return "Invalid";
    }
}
// console.log(topRatedRestaurant(888));
console.log(topRatedRestaurant([7,888,90,098,90]));
console.log(topRatedRestaurant([]));

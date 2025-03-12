let cities = ["Chicago", "New York", "Rome", "Paris", "Dallas"];

cities.forEach((city, index, array) => {
    array[index] = city.toUpperCase();
});

console.log(cities);

// This output is an array containing 5 of my favorite cities in uppercase 


let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);

console.log(squares);

// This is output is an array containing the squares of each number in the original array.


let scores = [85, 42, 90, 75, 30, 100];

highScores = scores.filter(score => score >= 80);

console.log(highScores);

// This output is an array of all the scores greater than or equal to 80 in the original array.

let fovoriteFood = ["Pizza", "Pasta", "Hamburger", "Spachetti", "Lasagna", "Salade"];

let findFood = fovoriteFood.find(food => food.length > 4);

foodIndex = fovoriteFood.findIndex(food => food = "Pizza");

console.log(foodIndex);
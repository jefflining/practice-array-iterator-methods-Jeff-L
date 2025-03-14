let cities = ["Chicago", "New York", "Rome", "Paris", "Dallas"];

cities.forEach((city, index, array) => {
    array[index] = city.toUpperCase();
});

console.log(cities);

// Output: ['CHICAGO', 'NEW YORK', 'ROME', 'PARIS', 'DALLAS']


let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);

console.log(squares);

// Output: [1, 4, 9, 16, 25]


let scores = [85, 42, 90, 75, 30, 100];

highScores = scores.filter(score => score >= 80);

console.log(highScores);

// Output: [85, 90, 100] 

let fovoriteFood = ["Pizza", "Pasta", "Hamburger", "Spachetti", "Lasagna", "Salade"];

let findFood = fovoriteFood.find(food => food.length > 4);

foodIndex = fovoriteFood.findIndex(food => food = "Pizza");

console.log(foodIndex);
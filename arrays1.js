const groceries = ["milk", "eggs", "veggies", "bread", "meats", "drinks"];
console.log(groceries[1]);
console.log(groceries.length);
console.log(groceries[groceries.length - 1]);
console.log(groceries.pop());
groceries.push("fish");
groceries.push("coffee");
console.log(groceries);

const firstThreeItems = [groceries.slice(0, 3)];
console.log(firstThreeItems);

//bonus challange, had to look it up.
groceries.splice(2, 1);
groceries.unshift("fruits");
groceries.splice(0, 2, "ketchup", "chili");
console.log(groceries);

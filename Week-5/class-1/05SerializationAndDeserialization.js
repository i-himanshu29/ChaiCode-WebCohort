
// Original burger object (before teleportation)
const burger = {
    name: "Cheese Burger",
    ingredients: ["Bun", "Beef Patty", "Cheese", "Tomato", "Sauce"],
    calories: 550
};

// 🍔 Serialization - Convert the burger object into JSON format
const serializedBurger = JSON.stringify(burger);
console.log("Serialized Burger:", serializedBurger);
// Sending JSON data over a network (e.g., API request) 

// 🔄 Deserialization - Convert JSON back to an object
const deserializedBurger = JSON.parse(serializedBurger);
console.log("Deserialized Burger:", deserializedBurger);
const foods = [

  // BREAKFAST
  {
    name: "Poha",
    calories: 270,
    protein: 6,
    carbs: 52,
    fat: 3,
    type: "breakfast"
  },

  {
    name: "Idli",
    calories: 130,
    protein: 4,
    carbs: 27,
    fat: 1,
    type: "breakfast"
  },

  {
    name: "Dosa",
    calories: 133,
    protein: 3,
    carbs: 26,
    fat: 2,
    type: "breakfast"
  },

  {
    name: "Upma",
    calories: 220,
    protein: 4,
    carbs: 38,
    fat: 6,
    type: "breakfast"
  },

  {
    name: "Oats",
    calories: 147,
    protein: 6,
    carbs: 27,
    fat: 3,
    type: "breakfast"
  },

  // LUNCH
  {
    name: "Dal Chawal",
    calories: 300,
    protein: 10,
    carbs: 50,
    fat: 5,
    type: "lunch"
  },

  {
    name: "Rajma Chawal",
    calories: 325,
    protein: 12,
    carbs: 55,
    fat: 6,
    type: "lunch"
  },

  {
    name: "Chole",
    calories: 320,
    protein: 13,
    carbs: 45,
    fat: 8,
    type: "lunch"
  },

  {
    name: "Roti Sabzi",
    calories: 250,
    protein: 8,
    carbs: 35,
    fat: 8,
    type: "lunch"
  },

  // DINNER
  {
    name: "Khichdi",
    calories: 320,
    protein: 9,
    carbs: 40,
    fat: 6,
    type: "dinner"
  },

  {
    name: "Dal Roti",
    calories: 250,
    protein: 9,
    carbs: 35,
    fat: 5,
    type: "dinner"
  },

  {
    name: "Palak Paneer",
    calories: 300,
    protein: 18,
    carbs: 8,
    fat: 20,
    type: "dinner"
  },

  {
    name: "Vegetable Curry",
    calories: 280,
    protein: 7,
    carbs: 25,
    fat: 12,
    type: "dinner"
  },

  {
    name: "Soybean Curry",
    calories: 320,
    protein: 24,
    carbs: 18,
    fat: 10,
    type: "dinner"
  }

];

function generateMeal() {

  const selectedFoods = Array.from(
    document.querySelectorAll(".food:checked")
  ).map(food => food.value);

  let goal = document.getElementById("goal").value;
  let age = Number(document.getElementById("age").value);
let height = Number(document.getElementById("height").value);
let weight = Number(document.getElementById("weight").value);
let activity = document.getElementById("activity").value;

  let filteredFoods = foods.filter(food =>
    selectedFoods.includes(food.name)
  );

  let breakfast = filteredFoods.filter(f => f.type === "breakfast");
  let lunch = filteredFoods.filter(f => f.type === "lunch");
  let dinner = filteredFoods.filter(f => f.type === "dinner");

 let targetCalories = weight * 30;

if (activity === "moderate") targetCalories += 200;
if (activity === "gym") targetCalories += 400;
if (activity === "athlete") targetCalories += 600;

if (goal === "loss") targetCalories -= 300;
if (goal === "gain") targetCalories += 300;

  function pickMeal(arr, maxCalories) {

    if (arr.length === 0) {
      return {
        name: "No option selected",
        calories: 0
      };
    }

    let options = arr.filter(
      f => f.calories <= maxCalories
    );

    if (options.length === 0) {
      options = arr;
    }

    return options[
      Math.floor(Math.random() * options.length)
    ];
  }

  let days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  ];

  let output = "<h3>📅 Weekly Meal Plan</h3>";

  days.forEach(day => {

    let b = pickMeal(
      breakfast,
      targetCalories * 0.3
    );

    let l = pickMeal(
      lunch,
      targetCalories * 0.4
    );

    let d = pickMeal(
      dinner,
      targetCalories * 0.3
    );

let totalCalories =
  b.calories +
  l.calories +
  d.calories;

let totalProtein =
  b.protein +
  l.protein +
  d.protein;

let totalCarbs =
  b.carbs +
  l.carbs +
  d.carbs;

let totalFat =
  b.fat +
  l.fat +
  d.fat;

output += `
  <div class="day-card">
    <h4>${day}</h4>

    <p>🍳 Breakfast: ${b.name}</p>
    <p>🍛 Lunch: ${l.name}</p>
    <p>🍲 Dinner: ${d.name}</p>

    <p>🔥 Calories: ${totalCalories} kcal</p>
    <p>💪 Protein: ${totalProtein} g</p>
    <p>🍚 Carbs: ${totalCarbs} g</p>
    <p>🥜 Fat: ${totalFat} g</p>
  </div>
`;
  });

  document.getElementById("result").innerHTML = output;
}

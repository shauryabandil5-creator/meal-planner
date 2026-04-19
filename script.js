const foods = [
  { name: "Poha", calories: 180, type: "breakfast" },
  { name: "Idli", calories: 120, type: "breakfast" },
  { name: "Dosa", calories: 200, type: "breakfast" },
  { name: "Upma", calories: 200, type: "breakfast" },
  { name: "Oats", calories: 150, type: "breakfast" },

  { name: "Dal Chawal", calories: 300, type: "lunch" },
  { name: "Rajma Chawal", calories: 350, type: "lunch" },
  { name: "Chole", calories: 320, type: "lunch" },
  { name: "Roti Sabzi", calories: 250, type: "lunch" },

  { name: "Khichdi", calories: 220, type: "dinner" },
  { name: "Dal Roti", calories: 250, type: "dinner" },
  { name: "Palak Paneer", calories: 300, type: "dinner" }
];

function generateMeal() {

  let like = document.getElementById("like").value.toLowerCase().split(",");
  let dislike = document.getElementById("dislike").value.toLowerCase().split(",");
  let goal = document.getElementById("goal").value;

  like = like.map(l => l.trim()).filter(l => l !== "");
  dislike = dislike.map(d => d.trim()).filter(d => d !== "");

  let filteredFoods = foods.filter(food =>
    !dislike.some(d => food.name.toLowerCase().includes(d))
  );

  let breakfast = filteredFoods.filter(f => f.type === "breakfast");
  let lunch = filteredFoods.filter(f => f.type === "lunch");
  let dinner = filteredFoods.filter(f => f.type === "dinner");

  let targetCalories = 2000;
  if (goal === "loss") targetCalories = 1500;
  if (goal === "gain") targetCalories = 2500;

  function pickMeal(arr, maxCalories) {
    let options = arr.filter(f => f.calories <= maxCalories);
    if (options.length === 0) options = arr;
    return options[Math.floor(Math.random() * options.length)];
  }

  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let output = "<h3>📅 Weekly Meal Plan</h3>";

  days.forEach(day => {
    let b = pickMeal(breakfast, targetCalories * 0.3);
    let l = pickMeal(lunch, targetCalories * 0.4);
    let d = pickMeal(dinner, targetCalories * 0.3);

    let total = (b?.calories || 0) + (l?.calories || 0) + (d?.calories || 0);

    output += `
      <div class="day-card">
        <h4>${day}</h4>
        <p>🍳 Breakfast: ${b?.name}</p>
        <p>🍛 Lunch: ${l?.name}</p>
        <p>🍲 Dinner: ${d?.name}</p>
        <p>🔥 Calories: ${total} kcal</p>
      </div>
    `;
  });

  document.getElementById("result").innerHTML = output;
}

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

  let breakfast = foods.filter(f => f.type === "breakfast");
  let lunch = foods.filter(f => f.type === "lunch");
  let dinner = foods.filter(f => f.type === "dinner");

  function shuffle(arr) {
    return arr.sort(() => 0.5 - Math.random());
  }

  breakfast = shuffle(breakfast);
  lunch = shuffle(lunch);
  dinner = shuffle(dinner);

  // Weekly plan
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let output = "<h3>📅 Weekly Meal Plan</h3>";

days.forEach((day, i) => {
  let b = breakfast[i % breakfast.length]?.name || "No option";
  let l = lunch[i % lunch.length]?.name || "No option";
  let d = dinner[i % dinner.length]?.name || "No option";

  output += `
    <p><b>${day}</b><br>
    Breakfast: ${b}<br>
    Lunch: ${l}<br>
    Dinner: ${d}</p>
  `;
});

document.getElementById("result").innerHTML = output;
}
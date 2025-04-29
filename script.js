const weightInput = document.getElementById("weight");
const weight = parseFloat(weightInput.value) || 100; // default to 100g

// After getting the API result:
const scale = weight / 100;
const calories = data.calories * scale;
const protein = data.protein_g * scale;
const fat = data.fat_total_g * scale;
// etc.

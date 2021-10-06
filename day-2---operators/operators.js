/**
 * Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal;
 * 
 * Find and print:
 * (1) - the meal's total cost
 * (2) - Round the result to the nearest integer.
 * 
 * @param {Number} mealCost 
 * @param {Number} tipPercent 
 * @param {NUmber} taxPercent 
 */

function solve(mealCost, tipPercent, taxPercent) {
  const TOTAL_COST = mealCost + (tipPercent * mealCost / 100) + (taxPercent * mealCost / 100); // (1)
  const ROUNDED_COST = Math.round(TOTAL_COST); // (2)

  return ROUNDED_COST;
}

console.log(solve(120, 5, 16));
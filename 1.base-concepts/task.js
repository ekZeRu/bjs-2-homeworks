"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (Math.pow(b, 2) - 4 * a * c);
  if (discriminant === 0) {
  arr = [-b / (2 * a)];
  }
  else if (discriminant > 0) {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlypercent = (percent * 0.01) / 12;
  let debt = amount - contribution;
  let monthlyDebt = debt * (monthlypercent + (monthlypercent / ((Math.pow(1 + monthlypercent, countMonths)) - 1)));
  let result = (monthlyDebt * countMonths).toFixed(2);
  return Number(result);
}

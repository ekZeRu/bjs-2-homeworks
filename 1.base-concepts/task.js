"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (Math.pow(b, 2) - 4 * a * c);
  if (discriminant === 0) {
  arr = [-b / (2 * a)];
  }
  else if (discriminant > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}
solveEquation(9, -30, 25)
solveEquation(1, 5, 4)
solveEquation(1, 2, 1)
solveEquation(1, 2, 10)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlypercent = percent * 0.01;
  let debt = amount - contribution;
  let monthlyDebt = debt * (monthlypercent + (monthlypercent / ((Math.pow(1 + monthlypercent, countMonths)) - 1)));
  let result = (monthlyDebt * countMonths + contribution).toFixed(2);
  return Number(result);
}
calculateTotalMortgage(10, 0, 50000, 12)
calculateTotalMortgage(10, 1000, 50000, 12)
calculateTotalMortgage(10, 20000, 20000, 48)
calculateTotalMortgage(10, 0, 10000, 36)
calculateTotalMortgage(15, 0, 10000, 36)
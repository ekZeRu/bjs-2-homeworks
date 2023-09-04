"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (Math.pow(b, 2) - 4 * a * c);
  if (discriminant === 0) {
  arr.push(-b / (2 * a));
  }
  else (discriminant > 0) ;{
    arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a))
  }
  return arr;
}

function solveEquation();

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlypercent = (percent * 0.01) / 12;
  let debt = amount - contribution;
  let monthlyDebt = debt * (monthlypercent + (monthlypercent / ((Math.pow(1 + monthlypercent, countMonths)) - 1)));
  let result = monthlyDebt * countMonths + contribution;
  return result.toFixed(2);
}

function calculateTotalMortgage()
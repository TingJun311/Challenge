
function bmiCalculator(weight, height) {
  const result = Math.round(weight / (height * height));
  if (result < 18.5) {
    return `Your BMI is ${result}, so you are underweight.`;
  }
  if (result > 24.9) {
    return `Your BMI is ${result}, so you are overweight.`;
  }
  return `Your BMI is ${result}, so you have a normal weight.`;
}

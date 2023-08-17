const factorial = (fact = 5) => {
  let resp = 1;
  for (let i = 1; i <= fact; i++) {
    resp *= i;
  }
  return resp;
};

console.log(factorial(3));

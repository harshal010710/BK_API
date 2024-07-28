var express = require("express");
var app = express();

var PORT = 3000;

app.get("/", (req, res)=>{
  res.send("Welcome to ECOM Backend Endpoints : 1. /welcome , 2. /greet , 3. /check-password , 4. /subscription-status ")
})
// Q1
function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

// Q2
function getGreetingMessage(username) {
  return "Hello, " + username + "!";
}

app.get("/greet", (req, res) => {
  res.send(getGreetingMessage(req.query.username));
});

// Q3
function checkPasswordStrength(password) {
  if (password.length <= 15) {
    return "Weak";
  } else {
    return "Strong";
  }
}

app.get("/check-password", (req, res) => {
  res.send(checkPasswordStrength(req.query.password));
});

// Q4
function getSum(a, b) {
  return a + b;
}

app.get("/sum", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  res.send(getSum(num1, num2).toString());
});

// Q5
function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === "true") {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}

app.get("/subscription-status", (req, res) => {
  res.send(getSubscriptionStatus(req.query.username, req.query.isSubscribed));
});

// Q6
function getDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

app.get("/discounted-price", (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);

  res.send(getDiscountedPrice(price, discount));
});

// Q7
function getPersonalizedGreeting(age, gender, name) {
  return (
    "Hello, " +
    name +
    "! You are a " +
    parseInt(age) +
    "year old " +
    gender +
    "."
  );
}

app.get("/personalized-greeting", (req, res) => {
  let age = req.query.age;
  let name = req.query.name;
  let gender = req.query.gender;

  res.send(getPersonalizedGreeting(age, gender, name));
});

// Q8
function getFinalPrice(price, discount, tax) {
  return (
    price -
    (price * discount) / 100 +
    ((price - (price * discount) / 100) * tax) / 100
  );
}

app.get("/final-price", (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);
  let tax = parseInt(req.query.tax);

  res.send(getFinalPrice(price, discount, tax).toString());
});

// Q9
function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}
app.get("/total-exercise-time", (req, res) => {
  let running = parseInt(req.query.running);
  let cycling = parseInt(req.query.cycling);
  let swimming = parseInt(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

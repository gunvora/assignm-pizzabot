const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

const checkOrderName = (orderName)  => {
  if(orderName == "Vegetarian Pizza") {
    return true;
  } else if (orderName == "Hawaiian Pizza") {
    return true;
  } else if (orderName == "Pepperoni Pizza") {
    return true;
  } else {
  return false;
  }
}

const totalCost = (orderQuantity) =>  {
  return (pizzaPrice * orderQuantity);
}

const cookingTime = (orderQuantity) =>  {
  if (orderQuantity <= 2) {
    time = 10;
    return time;
  } else if (orderQuantity <= 5) {
    time = 15;
    return time;
  } else {
    time = 20;
    return time;
  }
}

alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and " + pepperoni);
const orderName = prompt("Enter the name of the pizza you want to order today.");
const correctPizzaName = checkOrderName(orderName);
if (correctPizzaName == true) {
  let orderQuantity = prompt("How many of " + orderName + " do you want?");
    if (orderQuantity > 0)  {
      const toPay = totalCost(orderQuantity);
      const waitingTime = cookingTime(orderQuantity);
      alert("Great, I'll get started on your " + orderName + " right away, it will cost " + toPay + " kr. The pizzas will take " + waitingTime + " minutes.");
    } else {
      alert("You have not told how many pizzas you want. Please reload page and try again!");
    }
} else {
  alert("That Pizza is not on the menu. Please reload page and try again!")
}

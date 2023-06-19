const food = [
  {
    name: `apple`,
    category: `fruit`,
    price: `1$`,
    description: `a green fruit`,
    picture:
      "https://www.sreemeenakshifruits.com/content/images/thumbs/0000181_green-apple_550.jpeg",
  },
  {
    name: `carot`,
    category: `vegetable`,
    price: `2$`,
    description: `a orange vegetable`,
    picture:
      "https://thumbs.dreamstime.com/z/carot-separate-carrot-head-white-background-211083457.jpg",
  },
];

// creating the cards for each food object
for (let i = 0; i < food.length; i++) {
  // initializing the card
  let card = document.createElement(`div`);
  // adding the picture
  let picture = document.createElement(`img`);
  picture.src = food[i].picture;
  card.appendChild(picture);
  // adding the name
  let name = document.createTextNode(food[i].name);
  card.appendChild(name);
  // adding the category
  let category = document.createTextNode(food[i].category);
  card.appendChild(category);
  // adding the description
  let description = document.createTextNode(food[i].description);
  card.appendChild(description);
  // adding the price
  let price = document.createTextNode(food[i].price);
  card.appendChild(price);
  // set ID
  card.setAttribute("id", food[i].name);
  // set class
  card.className = food[i].category;
  // appending the card to the body
  document.body.appendChild(card);
}

/* // creating the cards
for (let i = 0; i < food.length; i++) {
  // card
  let card = document.createElement(`div`);
  // adding the picture
  let picture = document.createElement(`img`);
  picture.src = food[i].picture;
  card[i].children[0].appendChild(picture);
  // adding the name
  let name = document.createTextNode(food[i].name);
  card[i].children[1].appendChild(name);
  // adding the category
  let category = document.createTextNode(food[i].category);
  card[i].children[2].appendChild(category);
  // adding the description
  let description = document.createTextNode(food[i].description);
  card[i].children[3].appendChild(description);
  // adding the price
  let price = document.createTextNode(food[i].price);
  card[i].children[4].appendChild(price);
  // set ID
  card[i].setAttribute("id", food[i].name);
  // set class
  card[i].className = food[i].category;
} */

// source : https://www.nytimes.com/2022/12/14/dining/most-popular-recipes.html
const food = [
  {
    name: `San Francisco-Style Vietnamese American Garlic Noodles`,
    category: [`vegan`, `pasta`],
    price: `10€`,
    description: `garlic pasta`,
    picture:
      "https://static01.nyt.com/images/2022/03/09/dining/14TOPRECIPES-ROUNDUP-Garlic-Noodles-e-copy/merlin_202696338_41f4cf49-3706-44b8-a732-cbcfc7e955dd-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    name: `Sticky Coconut Chicken and Rice`,
    category: [`rice`],
    price: `12€`,
    description: `chicken and rice`,
    picture:
      "https://static01.nyt.com/images/2022/03/17/dining/14TOPRECIPES-ROUNDUP-sticky-coconut-chicken-and-rice-copy/merlin_202696401_f3bea8d6-0e32-4f31-a0ba-5238e30c50a9-superJumbo.jpg?quality=75&auto=webp",
  },
];

// creating the cards for each food object
for (let i = 0; i < food.length; i++) {
  // initializing the card
  let card = document.createElement(`div`);
  // adding the picture
  let picture = document.createElement(`img`);
  picture.src = food[i].picture;
  picture.className = ``;
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
  for (j = 0; j < food[i].category.length; j++) {
    card.classList.add(food[i].category[j]);
  }
  // appending the card to the body
  document.body.appendChild(card);
}

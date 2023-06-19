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
// CONST

 const main=document.querySelector("main")
 const container=document.getElementById("container")
 const menuCat=document.getElementById("category") 
 let categories=[]

 // defines every categories that exists and remove dubble
food.forEach((element) => { 
  for (let i=0; i<element.category.length;i++)
  if (categories.includes(element.category[i])){
  }
  else {
  categories.push(element.category[i])
}
}
)

// function that sort cards by category
const SelectCategory = (event) =>{
  console.log("test")
  container.replaceChildren()
  let cat=event.target.id

  createCard(SelectCategory)
}


// creating menu of categories
const createMenuCat=()=>{
  for (let i=0; i<categories.length;i++){
  let createP=document.createElement("p")
  let createDiv=document.createElement("div")
  createDiv.className=categories[i]
  createP.textContent=categories[i]
  createDiv.appendChild(createP)
  createDiv.addEventListener('click',SelectCategory)
  menuCat.appendChild(createDiv)

}
}
createMenuCat()



// creating the cards for each food object
const createCard = (food) => {

  for (let i = 0; i < food.length; i++) {
    // initializing the card
    let card = document.createElement(`div`);

    // adding the picture
    let picture = document.createElement(`img`);
    picture.src = food[i].picture;
    card.appendChild(picture);

    // adding the name
    let paragraph1 = document.createElement(`p`);
    let name = document.createTextNode(food[i].name);
    paragraph1.className = "name";
    card.appendChild(paragraph1);
    paragraph1.appendChild(name);

    // adding the category
    let paragraph2 = document.createElement(`p`);
    let category = document.createTextNode(food[i].category);
    paragraph2.className = "category";
    card.appendChild(paragraph2);
    paragraph2.appendChild(category);

    // adding the description
    let paragraph3 = document.createElement(`p`);
    let description = document.createTextNode(food[i].description);
    paragraph3.className = "description";
    card.appendChild(paragraph3);
    paragraph3.appendChild(description);

    // adding the price
    let paragraph4 = document.createElement(`p`);
    let price = document.createTextNode(food[i].price);
    paragraph4.className = "price";
    card.appendChild(paragraph4);
    paragraph4.appendChild(price);

    // set ID
    card.setAttribute("id", food[i].name);
    // set class
    for (j = 0; j < food[i].category.length; j++) {
      card.classList.add(food[i].category[j]);
    }
    // appending the card to the body
    container.appendChild(card);

  }
}
createCard(food)




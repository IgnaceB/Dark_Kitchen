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
// CONST
 let main=document.querySelector("main")
 let container=document.getElementById("container")
 let categories=[]

 // defines every categories that exists and remove dubble
food.forEach((element) => { 
  if (categories.includes(element)){
  }
  else {
  categories.push(element.category)
}
}
)

// creating menu of categories


// function that sort cards by category
const SelectCategory = (event) =>{
  console.log("test")
/*  container.replaceChildren()
  let SelectCategory=[]
  let cat=event.target.id

  createCard(SelectCategory)*/
}


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
    let paragraph1 = document.createElement(`p`)
    let name = document.createTextNode(food[i].name);
    paragraph1.className="name"
    card.appendChild(paragraph1);
    paragraph1.appendChild(name);

    // adding the category
    let paragraph2 = document.createElement(`p`)
    let category = document.createTextNode(food[i].category);
    paragraph2.className="category"
    card.appendChild(paragraph2);
    paragraph2.appendChild(category);

    // adding the description
    let paragraph3 = document.createElement(`p`)
    let description = document.createTextNode(food[i].description);
    paragraph3.className="description"
    card.appendChild(paragraph3);
    paragraph3.appendChild(description);

    // adding the price
    let paragraph4 = document.createElement(`p`)
    let price = document.createTextNode(food[i].price);
    paragraph4.className="price"
    card.appendChild(paragraph4);
    paragraph4.appendChild(price);

    // set ID
    card.setAttribute("id", food[i].name);
    // set class
    card.className = food[i].category;
    // appending the card to the body
    container.appendChild(card);

  }
}
createCard(food)



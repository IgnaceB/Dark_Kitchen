// source : https://www.nytimes.com/2022/12/14/dining/most-popular-recipes.html
const food = [
  // 1
  {
    name: `San Francisco-Style Vietnamese American Garlic Noodles`,
    category: [`pasta`],
    price: `10€`,
    description: `Satisfying stir-fry dish made with plenty of garlic, pasta, fish sauce, oyster sauce, soy sauce, butter, and Parmesan cheese.`,
    picture: `https://static01.nyt.com/images/2022/03/09/dining/14TOPRECIPES-ROUNDUP-Garlic-Noodles-e-copy/merlin_202696338_41f4cf49-3706-44b8-a732-cbcfc7e955dd-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 2
  {
    name: `Sticky Coconut Chicken and Rice`,
    category: [`meat`, `rice`],
    price: `12€`,
    description: `This comforting one-pot chicken dish features fragrant coconut rice infused with aromatic ginger, garlic and scallion, and studded with toasty cashews.`,
    picture: `https://static01.nyt.com/images/2022/03/17/dining/14TOPRECIPES-ROUNDUP-sticky-coconut-chicken-and-rice-copy/merlin_202696401_f3bea8d6-0e32-4f31-a0ba-5238e30c50a9-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 3
  {
    name: `Thanksgiving Stuffing`,
    category: [`meat`, `bread`],
    price: `15€`,
    description: `Dried bread cubes, sausage, diced vegetables, and chicken broth. It's a great side dish`,
    picture: `https://static01.nyt.com/images/2022/11/16/dining/14TOPRECIPES-ROUNDUP-STUFFING/14STUFFINGREX-thanksgiving-stuffing-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 4
  {
    name: `Greek Chicken With Cucumber-Feta Salad`,
    category: [`meat`, `salad`],
    price: `13€`,
    description: `The fresh, crisp veggies with flavor-forward Mediterranean Seasoning and creamy feta with marinated chicken make a meal that's hard to forget.`,
    picture: `https://static01.nyt.com/images/2022/04/18/dining/14TOPRECIPES-ROUNDUP-greek-chicken-copy/14TOPRECIPES-ROUNDUP-greek-chicken-copy-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 5
  {
    name: `Brothy Thai Curry With Silken Tofu and Herbs`,
    category: [`vegan`, `soup`],
    price: `8€`,
    description: `Jarred red curry paste, coconut milk, garlic, ginger and tomatoes make up the fragrant base of this comforting vegan soup from Yewande Komolafe.`,
    picture: `https://static01.nyt.com/images/2022/01/26/dining/14TOPRECIPES-ROUNDUP-Thai-Curry/merlin_200470170_6a85fd4a-706c-4212-b1e4-883625c1678d-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 6
  {
    name: `Tajín Grilled Chicken`,
    category: [`meat`],
    price: `15€`,
    description: `Combines Tajín, a Mexican seasoning made from dried, ground red chiles, sea salt and dehydrated lime juice, with agave syrup, orange juice and zest, chipotles, adobo and garlic to make a glossy sauce for grilled boneless chicken thighs.`,
    picture: `https://static01.nyt.com/images/2022/05/25/dining/14TOPRECIPES-ROUNDUP-tajin-grilled-chicken-copy/merlin_206068182_ffd1a522-033b-4519-969f-1990ecb8a8f0-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 7
  {
    name: `Ombré Gratin`,
    category: [`vegan`],
    price: `9€`,
    description: `Gorgeous vegetarian ombré gratin, made with layers of butternut squash, sweet potatoes, beets, potatoes and phyllo pastry sheets.`,
    picture: `https://static01.nyt.com/images/2022/12/09/dining/14TOPRECIPES-ROUNDUP-ombre/09VEG-THANKSGIVINGREX1-ombre2-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 8
  {
    name: `Mayo-Roasted Thanksgiving Turkey With Gravy`,
    category: [`meat`],
    price: `18€`,
    description: `Combining thick mayo with fresh herbs and slathering it all over the turkey to get an evenly seasoned and burnished bird`,
    picture: `https://static01.nyt.com/images/2022/11/09/dining/14TOPRECIPES-ROUNDUP-kenjirex-turkey-copy/merlin_215517726_42c97894-5015-4e50-9a26-57ab92966cb8-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 9
  {
    name: `Crispy Tofu With Balsamic Tomatoes`,
    category: [`vegan`, `salad`],
    price: `8€`,
    description: `TTT! Tasty Tofu Tomatoes!`,
    picture: `https://static01.nyt.com/images/2021/12/30/dining/14TOPRECIPES-ROUNDUP-CRISPY-ROASTED-TOFU/merlin_199407099_b0479456-485d-4818-86ac-8c80cf6c3af7-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 10
  {
    name: `Pad Krapow Gai (Thai Basil Chicken)`,
    category: [`meat`, `bean`],
    price: `9€`,
    description: `Salty, sweet and tangy ground chicken, basil and green bean stir-fry`,
    picture: `https://static01.nyt.com/images/2022/08/29/dining/14-TOPRECIPE-ROUNDUP-pad-grapow/merlin_212088519_ef79d3f5-7496-448a-8cf4-009939701ed4-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 11
  {
    name: `One-Pot Chicken and Rice With Ginger`,
    category: [`meat`, `rice`],
    price: `14€`,
    description: `Dinner of ginger fried rice and garlicky stir-fried greens`,
    picture: `https://static01.nyt.com/images/2022/07/19/dining/14TPOPRECIPES-ROUNDUP-one-pot-ginger-chicken-and-rice-copy/nb-one-pot-ginger-chicken-and-rice-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 12
  {
    name: `Lemon Ricotta Pancakes`,
    category: [`dessert`],
    price: `6€`,
    description: `Soft and sweet pancakes`,
    picture: `https://static01.nyt.com/images/2022/05/26/dining/14TOPRECIPE-ROUNDUP-LEMON-RICOTTA-PANCAKES/pancakes_01-thumb-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 13
  {
    name: `Dumpling Noodle Soup`,
    category: [`vegan`, `noodle`],
    price: `12€`,
    description: `Miso, ginger, garlic and turmeric create a flavorful base to which dumplings, noodles, baby bok choy and broccoli are added for a full meal.`,
    picture: `https://static01.nyt.com/images/2022/01/26/dining/14TOPRECIPES-ROUNDUP-dumpling-soup-copy/merlin_200484192_3bc869e5-4058-4892-8c66-beaf77e2253c-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 14
  {
    name: `Chile Crisp Fettuccine Alfredo With Spinach`,
    category: [`vegan`, `pasta`],
    price: `11€`,
    description: `No-chop dinner that hits all of the spicy, creamy and umami notes`,
    picture: `https://static01.nyt.com/images/2022/11/02/dining/14TOPRECIPES-ROUNDUP-alfredo/26korex-alfredo-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 15
  {
    name: `Sunday Sauce`,
    category: [`meat`, `pasta`, `bread`],
    price: `15€`,
    description: `This classic Italian sauce from Ali Slagle is rich with shredded pork shoulder, Italian sausage and meatballs. Served over pasta alongside a green salad and a hunk of good bread.`,
    picture: `https://static01.nyt.com/images/2022/02/08/dining/14TOPRECIPES-ROUNDUP-sunday-sauce-copy/merlin_201238980_104949b5-4fa9-4f9d-83a5-c0c7d26a4ec1-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 16
  {
    name: `Corn Salad With Tomatoes, Basil and Cilantro`,
    category: [`vegan`, `salad`],
    price: `6€`,
    description: `Corn, tomatoes, basil and cilantro — come together in this extremely simple salad`,
    picture: `https://static01.nyt.com/images/2022/07/15/dining/14TOPRECIPES-ROUNDUP-Tomato-Corn-With-Basil-15SALADREX-copy/merlin_209703621_3ca447ea-ea9e-4814-bc53-791234bd080f-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 17
  {
    name: `Seared Scallops With Glazed Brussels Sprouts`,
    category: [`vegan`, `rice`],
    price: `11€`,
    description: `meal of seared scallops and brussels sprouts glazed in a Dijon-, lime- and maple-based sauce served with risotto`,
    picture: ``,
  },
  // 18
  {
    name: `Pasta and Lentils (Pasta e Lenticchie)`,
    category: [`pasta`, `lentil`],
    price: `11€`,
    description: `Pasta and lentils cook together in one pot so the pasta releases starches that thicken the sauce. What results is a surprisingly creamy and luxe economical pantry meal`,
    picture: `https://static01.nyt.com/images/2022/02/28/dining/14TOPRECIPES-ROUNDUP-pasta-with-lentils-copy/merlin_201335688_d8a69491-86df-4311-82e8-680aa7382f26-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 19
  {
    name: `Pad Kee Mao (Drunken Noodles)`,
    category: [`vegan`, `pasta`],
    price: `11€`,
    description: `Cubed extra-firm tofu, plenty of fresh garlic, basil, chiles and rice noodles`,
    picture: `https://static01.nyt.com/images/2022/03/23/dining/14TOPRECIPES-ROUNDUP-padthai/14TOPRECIPES-ROUNDUP-padthai-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 20
  {
    name: `Tofu and Broccoli Fried Rice`,
    category: [`vegan`, `rice`],
    price: `9€`,
    description: `Fried rice recipe where cubes of tofu are cooked in a combination of soy sauce, garlic, ginger and sugar, absorbing the flavors like tender little sponges.`,
    picture: `https://static01.nyt.com/images/2022/01/11/dining/14TOPRECIPES-ROUNDUP-tofu-and-broccoli-fried-rice-copy/kc-tofu-and-broccoli-fried-rice-superJumbo-v2.jpg?quality=75&auto=webp`,
  },
];
// CONST

const main = document.querySelector("main");
const container = document.getElementById("container");
const menuCat = document.getElementById("category");
let categories = [];

// defines every categories that exists and remove dubble
food.forEach((element) => {
  for (let i = 0; i < element.category.length; i++)
    if (categories.includes(element.category[i])) {
    } else {
      categories.push(element.category[i]);
    }
});

// function that sort cards by category
const SelectCategory = (event) => {
  console.log("test");
  container.replaceChildren();
  let SelectCategory = [];

  let cat = event.target.id;
};

/*/*creating menu of categories*/
const createMenuCat = () => {
  for (let i = 0; i < categories.length; i++) {
    let createP = document.createElement("p");
    let createDiv = document.createElement("div");
    createDiv.className = categories[i];
    createP.textContent = categories[i];
    createDiv.appendChild(createP);
    createDiv.addEventListener("click", SelectCategory);
    menuCat.appendChild(createDiv);
  }
};
createMenuCat();

// creating the cards for each food object
const createCard = (food) => {
  for (let i = 0; i < food.length; i++) {
    // initializing the card
    let card = document.createElement(`div`);

    // adding the picture
    let picture = document.createElement(`img`);
    picture.src = food[i].picture;
    card.appendChild(picture);

    let cardText = document.createElement(`div`);
    cardText.className = "cardText";
    card.appendChild(cardText);

    // adding the name
    let paragraph1 = document.createElement(`p`);
    let name = document.createTextNode(food[i].name);
    paragraph1.className = "name";
    cardText.appendChild(paragraph1);
    paragraph1.appendChild(name);

    // adding the category
    let paragraph2 = document.createElement(`p`);
    let category = document.createTextNode(food[i].category);
    paragraph2.className = "category";
    cardText.appendChild(paragraph2);
    paragraph2.appendChild(category);

    // adding the description
    let paragraph3 = document.createElement(`p`);
    let description = document.createTextNode(food[i].description);
    paragraph3.className = "description";
    cardText.appendChild(paragraph3);
    paragraph3.appendChild(description);

    // adding the price
    let paragraph4 = document.createElement(`p`);
    let price = document.createTextNode(food[i].price);
    paragraph4.className = "price";
    cardText.appendChild(paragraph4);
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
};
createCard(food);

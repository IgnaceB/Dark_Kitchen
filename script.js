// food list
// source : https://www.nytimes.com/2022/12/14/dining/most-popular-recipes.html
const food = [
  //1
  {
    name: `San Francisco-Style Vietnamese American Garlic Noodles`,
    category: [`pasta`],
    price: 10.49,
    description: `Satisfying stir-fry dish made with plenty of garlic, pasta, fish sauce, oyster sauce, soy sauce, butter, and Parmesan cheese.`,
    picture: `https://static01.nyt.com/images/2022/03/09/dining/14TOPRECIPES-ROUNDUP-Garlic-Noodles-e-copy/merlin_202696338_41f4cf49-3706-44b8-a732-cbcfc7e955dd-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 2
  {
    name: `Sticky Coconut Chicken and Rice`,
    category: [`meat`, `rice`],
    price: 12.99,
    description: `This comforting one-pot chicken dish features fragrant coconut rice infused with aromatic ginger, garlic and scallion, and studded with toasty cashews.`,
    picture: `https://static01.nyt.com/images/2022/03/17/dining/14TOPRECIPES-ROUNDUP-sticky-coconut-chicken-and-rice-copy/merlin_202696401_f3bea8d6-0e32-4f31-a0ba-5238e30c50a9-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 3
  {
    name: `Thanksgiving Stuffing`,
    category: [`meat`, `bread`],
    price: 15.49,
    description: `Dried bread cubes, sausage, diced vegetables, and chicken broth. It's a great side dish`,
    picture: `https://static01.nyt.com/images/2022/11/16/dining/14TOPRECIPES-ROUNDUP-STUFFING/14STUFFINGREX-thanksgiving-stuffing-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 4
  {
    name: `Greek Chicken With Cucumber-Feta Salad`,
    category: [`meat`, `salad`],
    price: 13.09,
    description: `The fresh, crisp veggies with flavor-forward Mediterranean Seasoning and creamy feta with marinated chicken make a meal that's hard to forget.`,
    picture: `https://static01.nyt.com/images/2022/04/18/dining/14TOPRECIPES-ROUNDUP-greek-chicken-copy/14TOPRECIPES-ROUNDUP-greek-chicken-copy-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 5
  {
    name: `Brothy Thai Curry With Silken Tofu and Herbs`,
    category: [`vegan`, `soup`],
    price: 8.99,
    description: `Jarred red curry paste, coconut milk, garlic, ginger and tomatoes make up the fragrant base of this comforting vegan soup from Yewande Komolafe.`,
    picture: `https://static01.nyt.com/images/2022/01/26/dining/14TOPRECIPES-ROUNDUP-Thai-Curry/merlin_200470170_6a85fd4a-706c-4212-b1e4-883625c1678d-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 6
  {
    name: `Tajín Grilled Chicken`,
    category: [`meat`],
    price: 15.49,
    description: `Combines Tajín, a Mexican seasoning made from dried, ground red chiles, sea salt and dehydrated lime juice, with agave syrup, orange juice and zest, chipotles, adobo and garlic to make a glossy sauce for grilled boneless chicken thighs.`,
    picture: `https://static01.nyt.com/images/2022/05/25/dining/14TOPRECIPES-ROUNDUP-tajin-grilled-chicken-copy/merlin_206068182_ffd1a522-033b-4519-969f-1990ecb8a8f0-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 7
  {
    name: `Ombré Gratin`,
    category: [`vegan`],
    price: 9.19,
    description: `Gorgeous vegetarian ombré gratin, made with layers of butternut squash, sweet potatoes, beets, potatoes and phyllo pastry sheets.`,
    picture: `https://static01.nyt.com/images/2022/12/09/dining/14TOPRECIPES-ROUNDUP-ombre/09VEG-THANKSGIVINGREX1-ombre2-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 8
  {
    name: `Mayo-Roasted Thanksgiving Turkey With Gravy`,
    category: [`meat`],
    price: 18.99,
    description: `Combining thick mayo with fresh herbs and slathering it all over the turkey to get an evenly seasoned and burnished bird`,
    picture: `https://static01.nyt.com/images/2022/11/09/dining/14TOPRECIPES-ROUNDUP-kenjirex-turkey-copy/merlin_215517726_42c97894-5015-4e50-9a26-57ab92966cb8-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 9
  {
    name: `Crispy Tofu With Balsamic Tomatoes`,
    category: [`vegan`, `salad`],
    price: 8.99,
    description: `TTT! Tasty Tofu Tomatoes!`,
    picture: `https://static01.nyt.com/images/2021/12/30/dining/14TOPRECIPES-ROUNDUP-CRISPY-ROASTED-TOFU/merlin_199407099_b0479456-485d-4818-86ac-8c80cf6c3af7-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 10
  {
    name: `Pad Krapow Gai (Thai Basil Chicken)`,
    category: [`meat`, `bean`],
    price: 9.49,
    description: `Salty, sweet and tangy ground chicken, basil and green bean stir-fry`,
    picture: `https://static01.nyt.com/images/2022/08/29/dining/14-TOPRECIPE-ROUNDUP-pad-grapow/merlin_212088519_ef79d3f5-7496-448a-8cf4-009939701ed4-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 11
  {
    name: `One-Pot Chicken and Rice With Ginger`,
    category: [`meat`, `rice`],
    price: 14.99,
    description: `Dinner of ginger fried rice and garlicky stir-fried greens`,
    picture: `https://static01.nyt.com/images/2022/07/19/dining/14TPOPRECIPES-ROUNDUP-one-pot-ginger-chicken-and-rice-copy/nb-one-pot-ginger-chicken-and-rice-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 12
  {
    name: `Lemon Ricotta Pancakes`,
    category: [`dessert`],
    price: 6.49,
    description: `Soft and sweet pancakes`,
    picture: `https://static01.nyt.com/images/2022/05/26/dining/14TOPRECIPE-ROUNDUP-LEMON-RICOTTA-PANCAKES/pancakes_01-thumb-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 13
  {
    name: `Dumpling Noodle Soup`,
    category: [`vegan`, `noodle`],
    price: 12.99,
    description: `Miso, ginger, garlic and turmeric create a flavorful base to which dumplings, noodles, baby bok choy and broccoli are added for a full meal.`,
    picture: `https://static01.nyt.com/images/2022/01/26/dining/14TOPRECIPES-ROUNDUP-dumpling-soup-copy/merlin_200484192_3bc869e5-4058-4892-8c66-beaf77e2253c-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 14
  {
    name: `Chile Crisp Fettuccine Alfredo With Spinach`,
    category: [`vegan`, `pasta`],
    price: 11.39,
    description: `No-chop dinner that hits all of the spicy, creamy and umami notes`,
    picture: `https://static01.nyt.com/images/2022/11/02/dining/14TOPRECIPES-ROUNDUP-alfredo/26korex-alfredo-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 15
  {
    name: `Sunday Sauce`,
    category: [`meat`, `pasta`, `bread`],
    price: 15.59,
    description: `This classic Italian sauce from Ali Slagle is rich with shredded pork shoulder, Italian sausage and meatballs. Served over pasta alongside a green salad and a hunk of good bread.`,
    picture: `https://static01.nyt.com/images/2022/02/08/dining/14TOPRECIPES-ROUNDUP-sunday-sauce-copy/merlin_201238980_104949b5-4fa9-4f9d-83a5-c0c7d26a4ec1-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 16
  {
    name: `Corn Salad With Tomatoes, Basil and Cilantro`,
    category: [`vegan`, `salad`],
    price: 6.99,
    description: `Corn, tomatoes, basil and cilantro — come together in this extremely simple salad`,
    picture: `https://static01.nyt.com/images/2022/07/15/dining/14TOPRECIPES-ROUNDUP-Tomato-Corn-With-Basil-15SALADREX-copy/merlin_209703621_3ca447ea-ea9e-4814-bc53-791234bd080f-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 17
  {
    name: `Seared Scallops With Glazed Brussels Sprouts`,
    category: [`vegan`, `rice`],
    price: 11.19,
    description: `meal of seared scallops and brussels sprouts glazed in a Dijon-, lime- and maple-based sauce served with risotto`,
    picture: `https://static01.nyt.com/images/2022/02/13/dining/14TOPRECIPES-ROUNDUP-SCALLOPS/13EAT-seared-scallops-brussels-sprouts1-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 18
  {
    name: `Pasta and Lentils (Pasta e Lenticchie)`,
    category: [`pasta`, `lentil`],
    price: 11.39,
    description: `Pasta and lentils cook together in one pot so the pasta releases starches that thicken the sauce. What results is a surprisingly creamy and luxe economical pantry meal`,
    picture: `https://static01.nyt.com/images/2022/02/28/dining/14TOPRECIPES-ROUNDUP-pasta-with-lentils-copy/merlin_201335688_d8a69491-86df-4311-82e8-680aa7382f26-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 19
  {
    name: `Pad Kee Mao (Drunken Noodles)`,
    category: [`vegan`, `pasta`],
    price: 11.59,
    description: `Cubed extra-firm tofu, plenty of fresh garlic, basil, chiles and rice noodles`,
    picture: `https://static01.nyt.com/images/2022/03/23/dining/14TOPRECIPES-ROUNDUP-padthai/14TOPRECIPES-ROUNDUP-padthai-superJumbo.jpg?quality=75&auto=webp`,
  },
  // 20
  {
    name: `Tofu and Broccoli Fried Rice`,
    category: [`vegan`, `rice`],
    price: 9.99,
    description: `Fried rice recipe where cubes of tofu are cooked in a combination of soy sauce, garlic, ginger and sugar, absorbing the flavors like tender little sponges.`,
    picture: `https://static01.nyt.com/images/2022/01/11/dining/14TOPRECIPES-ROUNDUP-tofu-and-broccoli-fried-rice-copy/kc-tofu-and-broccoli-fried-rice-superJumbo-v2.jpg?quality=75&auto=webp`,
  },
];

// CONST
let click = 0;
const main = document.querySelector("main");
const container = document.getElementById("container");
const menuCat = document.getElementById("category");
const searchbar = document.querySelector("input");
let categories = [];
let filter = [];
let cart = [];
let multiplefood = [];
const listspace = document.createElement(`ul`);

// defines every categories that exists and remove dubble
const listOfCategories = () => {
  food.forEach((element) => {
    for (let i = 0; i < element.category.length; i++)
      if (categories.includes(element.category[i])) {
      } else {
        categories.push(element.category[i]);
      }
  });
};

//defining function Menu of categories
const createMenuCat = (i, menu) => {
  let createP = document.createElement("p");
  let createDiv = document.createElement("div");
  createDiv.className = categories[i];
  createP.innerText = categories[i];
  createDiv.appendChild(createP);
  createP.addEventListener("click", SelectCategory);
  menu.appendChild(createDiv);
};

// init the categories
listOfCategories();

// function that sort cards by category on click on DIV
const SelectCategory = (event) => {
  let cat = "";

  // delete + reset menu
  menuCat.replaceChildren();
  listOfCategories();

  for (let i = 0; i < categories.length; i++) {
    createMenuCat(i, menuCat);
  }

  //check if you click on p or div
  if (event.target.innerText != "") {
    cat = event.target.innerText;
  } else {
    cat = event.target.className;
  }

  //clean the card container
  container.replaceChildren();
  categories = [];

  // create cards
  for (let i = 0; i < food.length; i++) {
    if (food[i].category.includes(cat)) {
      createCard(i);

      // create array of the categories that are contained in each object that are called
      for (let j = 0; j < food[i].category.length; j++) {
        // verification if the value is already inside the array and avoiding to call the value you clicked on
        if (
          categories.includes(food[i].category[j]) ||
          food[i].category[j] == cat
        ) {
        } else {
          categories.push(food[i].category[j]);
        }
      }
    } else {
      continue;
    }
  }

  // looping on the array just updated, and create a div and a p for each value inside the element you clicked
  categories.forEach((element, index) => {
    let position = document.querySelector("." + cat);
    let createP = document.createElement("p");
    let createDiv = document.createElement("div");
    createDiv.className = categories[index];
    createP.innerText = categories[index];
    createDiv.appendChild(createP);

    // creating special event listener that display the combine value of both
    createDiv.addEventListener("click", (event) => {
      container.replaceChildren();
      for (let i = 0; i < food.length; i++) {
        if (
          food[i].category.includes(cat) &&
          food[i].category.includes(event.target.innerText)
        ) {
          createCard(i);
        } else {
          continue;
        }
      }
    });
    // positioning the subCat
    position.appendChild(createDiv);
  });
};

/*init menu of categories*/

for (let i = 0; i < categories.length; i++) {
  createMenuCat(i, menuCat);
}

// Defining function to create cards

const createCard = (i) => {
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

  // adding the cardText
  let cardText = document.createElement(`div`);
  cardText.className = "cardText";
  card.appendChild(cardText);

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

  // adding the cardBuy
  let cardBuy = document.createElement(`div`);
  cardBuy.className = "cardBuy";
  card.appendChild(cardBuy);

  // adding the price
  let paragraph4 = document.createElement(`p`);
  let price = document.createTextNode(food[i].price.toFixed(2) + `€`);
  paragraph4.className = "price";
  cardBuy.appendChild(paragraph4);
  paragraph4.appendChild(price);

  // adding the button

  let addbutton = document.createElement(`button`);
  addbutton.textContent = `add`;
  addbutton.value = food[i].name;

  // adding input for quantity
  let addInput = document.createElement(`input`);
  addInput.id = `input ${food[i].name}`;
  addInput.type = "number";
  addInput.value = "1";
  let selectedQuantity = "1";
  addInput.addEventListener("keyup", (event) => {
    selectedQuantity = event.target.value;
  });
  cardBuy.appendChild(addInput);

  // click on the button
  addbutton.addEventListener(`click`, (event) => {
    if (multiplefood.includes(event.target.value)) {
      let quantity = document.getElementById(`q ${event.target.value}`);

      let a = quantity.textContent;
      quantity.textContent = parseInt(a) + parseInt(selectedQuantity);
    } else {
      // push in the cart array
      cart.push(food[i]);
      let list = document.createElement(`li`);
      let listprice = document.createElement(`p`); // appending it to the minusplus div below
      let listquantity = document.createElement(`p`);
      listquantity.textContent = selectedQuantity;
      listquantity.id = `q ${food[i].name}`;
      let listname = document.createElement(`p`);
      listname.innerText = food[i].name;
      listprice.innerText = food[i].price.toFixed(2) + `€`;
      let numName = document.createElement(`div`);
      numName.className = `numName`;
      numName.appendChild(listquantity);
      numName.appendChild(listname);
      list.appendChild(numName);
      listspace.appendChild(list);

      totalcontainer.insertBefore(listspace, totalstring);

      // - + buttons
      let minusplus = document.createElement(`div`);
      minusplus.className = `minusplus`;
      let minusbutton = document.createElement(`p`);
      minusbutton.className = `buttonaddremove`;
      minusbutton.innerText = `-`;
      let plusbutton = document.createElement(`p`);
      plusbutton.className = `buttonaddremove`;
      plusbutton.innerText = `+`;
      // remove 1 or add 1
      minusbutton.addEventListener(`click`, () => {
        if (listquantity.textContent != 0) {
          listquantity.textContent = parseInt(listquantity.textContent) - 1;
          totalfloat -= food[i].price.toFixed(2);
          totalfloat.toFixed(2);
          totalstring.innerText = `Total : ` + totalfloat.toFixed(2) + `€`;
          if (listquantity.textContent == 0) {
            cart.splice(i, 1);
            list.remove();
            for (let y = 0; y < multiplefood.length; y++) {
              if (multiplefood[y] == food[i].name) {
                multiplefood.splice(y, 1);
                if (multiplefood.includes(food[i].name)) {
                  multiplefood.splice(y, 1);
                  if (multiplefood.includes(food[i].name)) {
                    multiplefood.splice(y, 1);
                  }
                }
              }
            }
          }
          /* console.log(multiplefood);
          console.log(listquantity.textContent);
          console.log(totalfloat.toFixed(2));
          console.log(cart); */
        }
      });

      plusbutton.addEventListener(`click`, (event) => {
        listquantity.textContent = parseInt(listquantity.textContent) + 1;
        totalfloat += food[i].price;

        totalstring.innerText = `Total : ` + totalfloat.toFixed(2) + `€`;
      });

      minusplus.appendChild(minusbutton);
      minusplus.appendChild(plusbutton);
      minusplus.appendChild(listprice); // appending it to the minus plus div for flex uses
      list.appendChild(minusplus);
    }
    multiplefood.push(event.target.value);
    // increment the total price of the cart
    totalfloat += food[i].price * selectedQuantity;
    totalstring.innerText = `Total : ` + totalfloat.toFixed(2) + `€`;
  });

  cardBuy.appendChild(addbutton);

  // set ID
  card.setAttribute("id", food[i].name);
  // set class
  for (j = 0; j < food[i].category.length; j++) {
    card.classList.add(food[i].category[j]);
  }
  // appending the card to the body
  container.appendChild(card);
};
// Initialization creating the cards for each food object

for (let i = 0; i < food.length; i++) {
  createCard(i);
}

// add eventlistener on searchbar

searchbar.addEventListener("keyup", (event) => {
  container.replaceChildren();
  for (let i = 0; i < food.length; i++) {
    console.log(event.target.value);
    console.log(Object.values(food[i]));
    let research = Object.values(food[i]).toString();
    console.log(research);
    if (research.includes(event.target.value)) {
      console.log("CA RENTRE");
      createCard(i);
    } else {
      continue;
    }
  }
});

// Creating the total of the cart
let totalcontainer = document.createElement(`div`);
totalcontainer.id = `total`;
let totalstring = document.createElement(`p`);
let totalfloat = 0;
totalstring.innerText = totalfloat.toFixed(2) + `€`;
totalcontainer.appendChild(totalstring);

// Form
const createFormCart = () => {
  let form = document.createElement(`form`);
  // name input
  let nameInput = document.createElement(`input`);
  nameInput.type = "text";
  nameInput.className = "nameClass";
  nameInput.placeholder = `Name`;
  nameInput.required = true;
  form.appendChild(nameInput);
  // adress input
  let adressInput = document.createElement(`input`);
  adressInput.type = "text";
  adressInput.className = "adressClass";
  adressInput.placeholder = `Adress`;
  adressInput.required = true;
  form.appendChild(adressInput);
  // appending to the container
  totalcontainer.appendChild(form);
};
createFormCart();

// Creating the buy button of the cart
const createButtonCart = () => {
  let buybutton = document.createElement(`button`);
  buybutton.className = `cartbutton`;
  buybutton.textContent = `Pay`;
  totalcontainer.appendChild(buybutton);
};
createButtonCart();
// Append the container of total to the nav
document.querySelector(`nav`).appendChild(totalcontainer);

// add event listener for opening cart menu
document.getElementById("shopping-cart").addEventListener("click", (event) => {
  if (document.getElementById("total").style.display == "flex") {
    document.getElementById("total").style.display = "none";
  } else {
    console.log(document.getElementById("total").style.display);
    document.getElementById("total").style.display = "flex";
  }
});

// add event listener to display the category
document.getElementById("trigger").addEventListener("click", (event) => {
  if (menuCat.style.visibility == "visible") {
    menuCat.style.visibility = "hidden";
    menuCat.style.transform = "translateY(0px)";
    menuCat.style.width = "0px";

    document.getElementById("trigger").querySelector("svg").style.transform =
      "rotate(0deg)";
  } else {
    menuCat.style.visibility = "visible";
    menuCat.style.width = "100vw";
    menuCat.style.transform = "translateY(700px)";


    document.getElementById("trigger").querySelector("svg").style.transform =
      "rotate(180deg)";
  }
});

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}


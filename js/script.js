// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'bacon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'bone',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'bread-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'candy-cane',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'carrot',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'cheese',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'blender',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {  name: 'flask',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-cheers',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'mug-hot',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-glass-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cat',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'crow',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'dog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'dove',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'feather',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'feather-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse-head',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'paw',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'spider',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  }
];



// Milestone 1

// icons.forEach((element, array) => {
//   let icona = `<div>
//                 <i class="${element.family} ${element.prefix}${element.name} ${element.category}"></i>
//                 <div class="title">${element.name}</div>
//               </div>`;
//   $('.icons').append(icona);
// });


// Milestone 2

const colors = ["red", "green", "blue"];
const categories = [];

icons.forEach((item) => {
  const categoria = item.category;
  if (categories.includes(categoria) == false) {
    categories.push(categoria);
  }
});

for (var i = 0; i < categories.length; i++) {

  icons.forEach((item) => {

    if (item.category == categories[i]) {

      let icona = `<div>
                      <i class="${item.family} ${item.prefix}${item.name}" style="color: ${colors[i]}"></i>
                      <div class="title">${item.name}</div>
                    </div>`;
        $('.icons').append(icona);
    }

  });


}


// Milestone 2 senza ES6
// var iconeFontawesome = document.getElementsByTagName("i");
// for(var i = 0; i < iconeFontawesome.length; i++){
//
//    if (iconeFontawesome[i].classList.contains("food")) {
//      $(iconeFontawesome[i]).addClass("green");
//    } else if (iconeFontawesome[i].classList.contains("beverage")) {
//      $(iconeFontawesome[i]).addClass("blue");
//    } else {
//      $(iconeFontawesome[i]).addClass("orange");
//    }
//
// }


// Milestone 3

var filteredIcons = [];

$('select').change(function(){

  $(".icons").empty();

  if (this.value == "food") {
    filteredIcons = icons.filter((element) => {
      return element.category =="food";
    })
  } else if (this.value == "beverage") {
    filteredIcons = icons.filter((element) => {
      return element.category =="beverage";
    })
  } else if (this.value == "animal") {
    filteredIcons = icons.filter((element) => {
      return element.category =="animal";
    })
  } else {
    filteredIcons = icons.map((element) => {
      return element;
    })
  }

  filteredIcons.forEach((element, array) => {
    let icona = `<div>
                  <i class="${element.family} ${element.prefix}${element.name} ${element.category}"></i>
                  <div class="title">${element.name}</div>
                </div>`;
    $('.icons').append(icona);
  });






});















// Alternativa per Milestone 1 / 2

// const food = icons.filter((element) => {
//   return element.category == "food";
// });
// const beverage = icons.filter((element) => {
//   return element.category == "beverage";
// });
// const animal = icons.filter((element) => {
//   return element.category == "animal";
// });
//
// let icona;
// // Icone Food
// let iconeFood = "";
// food.forEach((element, array) => {
//   icona = `<div>
//             <i class="${element.family} ${element.prefix}${element.name} green ${element.category}"></i>
//             <div class="title">${element.name}</div>
//           </div>`;
//   iconeFood += icona;
// });
// $('.icons').append(iconeFood);
//
// // Icone Beverage
// let iconeBeverage = "";
// beverage.forEach((element, array) => {
//   icona = `<div>
//             <i class="${element.family} ${element.prefix}${element.name} blue ${element.category}"></i>
//             <div class="title">${element.name}</div>
//           </div>`;
//   iconeBeverage += icona;
// });
// $('.icons').append(iconeBeverage);
//
// // Icone Animal
// let iconeAnimal = "";
// animal.forEach((element, array) => {
//   icona = `<div>
//             <i class="${element.family} ${element.prefix}${element.name} orange ${element.category}"></i>
//             <div class="title">${element.name}</div>
//           </div>`;
//   iconeAnimal += icona;
// });
// $('.icons').append(iconeAnimal);

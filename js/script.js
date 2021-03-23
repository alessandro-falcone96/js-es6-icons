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
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
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
    name: 'otter',
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
];



// Milestone 1

icons.forEach((element, array) => {
  let icona = `<div>
                <i class="${element.family} ${element.prefix}${element.name} ${element.category}"></i>
                <div class="title">${element.name}</div>
              </div>`;
  $('.icons').append(icona);
});


// Milestone 2

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

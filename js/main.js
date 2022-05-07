/* Burger Menu */

const menuBtn = document.querySelector(".burger-menu");
const menuBurger = document.querySelector(".nav__ul");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuBurger.classList.toggle("active");
});

/* Menu */
let menuItem = {
  burger: [
    {
      name: "Burger Dreams",
      price: "$ 9.20 USD",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "css/img/BG-dreams.png",
    },
    {
      name: "Burger Waldo",
      price: "$ 10.00 USD",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "css/img/BG-waldo.png",
    },
    {
      name: "Burger Cali",
      price: "$ 8.00 USD",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "css/img/BG-cali.png",
    },
    {
      name: "Burger Bacon Buddy",
      price: "$ 9.99 USD",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "css/img/BG-buddy.png",
    },
    {
      name: "Burger Spicy",
      price: "$ 9.20 USD",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "css/img/BG-spicy.png",
    },
    {
      name: "Burger Classic",
      price: "$ 8.00 USD",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "css/img/BG-classic.png",
    },
  ],
  sides: [
    {
      name: "Burger Dreams",
      price: "$ 9.20 USD",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "css/img/BG-dreams.png",
    }
  ],
  drinks: [
    {
      name: "Burger Classic",
      price: "$ 8.00 USD",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "css/img/BG-classic.png",
    }
  ],
};

const menu = document.querySelector(".menu-items");

function menuShow(category) {
  
  for (let i = 0; i < category.length; i++) {
    menu.innerHTML += `
            <div class="menu-item">
              <div class="item-img">
                <img src=${category[i].image} alt="" class="img" />
              </div>
              <div class="item-info">
                <div class="item-np">
                  <div class="item-name">${category[i].name}</div>
                  <div class="item-price">${category[i].price}</div>
                </div>
                <div class="item-text">
                ${category[i].text}
                </div>
                <div class="item-card">
                  <div class="item-count">1</div>
                  <a href="#" class="btn btn-card"
                    >Add to card</a
                  >
                </div>
              </div>
            </div>
            `;
  }
}

menuShow(menuItem.burger);

let menuBtns = document.querySelectorAll(".menu-btns");

function removeClassBtn(){
  menuBtns.forEach(event =>{
    for(let i = 0; i < event.children.length; i++){
      if(event.children[i].classList[1] == 'btn-active'){
        event.children[i].classList.remove('btn-active');
        event.children[i].classList.add('btn-secondary');
      }
    }
  })
}

menuBtns.forEach((event) => {
  event.addEventListener("click", (e) => {
    e.preventDefault();
    removeClassBtn();
    if (e.path[0].classList[1] == "btn-secondary") {
      const category = e.srcElement.innerHTML.toLowerCase();
      e.path[0].classList.add("btn-active");
      e.path[0].classList.remove("btn-secondary");

      menu.innerHTML = '';

      switch(category){
        case 'burger':
          menuShow(menuItem.burger);
          break;
        case 'sides':
          menuShow(menuItem.sides);
          break;
        case 'drinks':
          menuShow(menuItem.drinks)
          break;    
      }
    }
  });
  
});


const scrollNav = document.querySelectorAll('[data-scroll]');
const nav = document.querySelector('#nav');

let navHeight = nav.offsetHeight;

document.addEventListener('scroll', () =>{
  if(window.pageYOffset > navHeight){
    nav.classList.add('fixed');
  } else{
    nav.classList.remove('fixed');
  }
})

scrollNav.forEach(e =>{
  e.addEventListener('click', (event) =>{
    event.preventDefault();

    let elementID = e.attributes[2].nodeValue;
    document.querySelector(`#${elementID}`).scrollIntoView({block: 'start', behavior: 'smooth'});

  })
})


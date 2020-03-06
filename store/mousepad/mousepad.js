let articleSection = document.getElementById("articleSection");
let buyButton = document.getElementById("buy");


function Mousepad(name, imgSource, dimensions, price) {
    this.name = name;
    this.imgSource = imgSource;
    this.dimensions = dimensions;
    this.price = price;

    articleSection.innerHTML += 
    `
        <article>
            <h2> ${name} </h2>
            <img src="${imgSource}" alt="">
            <p> 
                <strong>LENGTH</strong>: ${dimensions} <br>
                <strong>PRICE</strong>: ${price} <br>
                <button id="buy"> Buy </button>
            </p>
        </article>
    `
  }

  new Mousepad("Cooler Master", "../../images/Mousepad/Cooler-Master-MasterAccesory.jpg", ' 13" ', "$1000");

  new Mousepad("Logitech G640", "../../images/Mousepad/Logitech-G640.jpg", ' 13" ', "$1200");

  new Mousepad("Razer Gollathus", "../../images/Mousepad/Razer-Goliathus.jpg", ' 13" ', "$1000");

  new Mousepad("SteelSeries QcK", "../../images/Mousepad/SteelSeies-QcK.jpg", ' 13" ', "$1000");


buyButton.addEventListener("click", () => {} )
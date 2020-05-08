let articleSection = document.querySelector(".articleSection");
let hideShowPopUp = document.getElementById("hideShow");


function Laptop(name, imgSource, dpi, price) {

    this.name = name;
    this.imgSource = imgSource;
    this.dpi = dpi;
    this.price = price;

    articleSection.innerHTML += 
    `
        <article>
            <h2> ${name} </h2>
            <img src="${imgSource}" alt="">
            <p> 
                <strong>DPI</strong>: ${dpi}  <br>
                <strong>PRICE</strong>: ${price} <br>
                <button class="buy"> Buy </button>
            </p>
        </article>
    `
  }

  new Laptop("Loitech G502 lightspeed", "../../images/mouse/loitech_G502_lightspeed.jpg", "16,000 DPI", "$149.00");

  new Laptop("Razer chroma", "../../images/mouse/razer_chroma.jpg","10,000", "$36");

  new Laptop("Razer deathadder elite", "../../images/mouse/razer_deathadder_elite.jpg", "16,000", "$60");

  new Laptop("SteelSeries rival 700", "../../images/mouse/SteelSerpies_rivam_700.jpg", "$16,000 DPI", "$80 ");

  let buyButton = document.getElementsByClassName("buy");
  for (var i = 0, len = buyButton.length; i < len; i++) {
      
    buyButton[i].addEventListener("click", () => {
        hideShowPopUp.style.display = "block"
    })
  }
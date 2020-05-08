let articleSection = document.querySelector(".articleSection");
let hideShowPopUp = document.getElementById("hideShow");


function Keyboard(name, imgSource, switchType, lighting, price) {
    this.name = name;
    this.imgSource = imgSource;
    this.switchType = switchType;
    this.lighting = lighting;
    this.price = price;

    articleSection.innerHTML += 
    `
        <article>
            <h2> ${name} </h2>
            <img src="${imgSource}" alt="">
            <p> 
                <strong>Switch Type</strong>: ${switchType} <br>
                <strong>Lightning</strong>: ${lighting} <br>
                <strong>PRICE</strong>: ${price} <br>
                <button class="buy"> Buy </button>
            </p>
        </article>
    `
  }

  new Keyboard("SteelSeries Apex Pro", "../../images/keyboard/Apex_pro.jpg", 'Mechanical', "Per-key RGB", "$199");

  new Keyboard("Thermaltake Level 20", "../../images/keyboard/Level-20-RGB-Cherry.jpg", 'Mechanical',"16.8 Million RGB Colors", "$139.99");

  new Keyboard("Logitech K350", "../../images/keyboard/Logitech_K350.jpg", 'Rubber dome', "No backlight", "$59.99");

  new Keyboard("Razer BlackWidow Ultimate", "../../images/keyboard/Razer_BlackWidow_ultimate_2016.jpg", 'Mechanical',"One color backlight", "$79.99");

  let buyButton = document.getElementsByClassName("buy");
  for (var i = 0, len = buyButton.length; i < len; i++) {
      
    buyButton[i].addEventListener("click", () => {
        hideShowPopUp.style.display = "block"
    })
  }
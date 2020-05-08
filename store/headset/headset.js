let articleSection = document.querySelector(".articleSection");
let hideShowPopUp = document.getElementById("hideShow");


function Keyboard(name, imgSource, sensitivity, micSensitivity, price) {
    this.name = name;
    this.imgSource = imgSource;
    this.sensitivity = sensitivity;
    this.micSensitivity = micSensitivity;
    this.price = price;

    articleSection.innerHTML += 
    `
        <article>
            <h2> ${name} </h2>
            <img src="${imgSource}" alt="">
            <p> 
                <strong>Sensitivity Type</strong>: ${sensitivity} <br>
                <strong>Microphone sensitivity</strong>: ${micSensitivity} <br>
                <strong>PRICE</strong>: ${price} <br>
                <button class="buy"> Buy </button>
            </p>
        </article>
    `
  }

  new Keyboard("A4Tech Bloody G530", "../../images/Headset/A4-Tech-Bloody-G530.jpg", '105dB', "–45 dB", "€23.30");

  new Keyboard("Razer Kraken", "../../images/Headset/Razer-Kraken.jpg", '109 dB.',"-45 ± 3 dB", "£79.99");

  new Keyboard("Rexus Thundervox", "../../images/Headset/Rexus-Thundervox.jpg", '108 dB', "-48±3dB", "€16.32");

  new Keyboard("SteelSeries Siberia 150", "../../images/Headset/SteelSeries-Siberia-150.jpg", '94 dB ',"-38 dB", "$39.99");

  let buyButton = document.getElementsByClassName("buy");
  for (var i = 0, len = buyButton.length; i < len; i++) {
      
    buyButton[i].addEventListener("click", () => {
        hideShowPopUp.style.display = "block"
    })
  }
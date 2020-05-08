let articleSection = document.querySelector(".articleSection");
let hideShowPopUp = document.getElementById("hideShow");


function Router(name, imgSource, ports, antenas, price) {
    this.name = name;
    this.imgSource = imgSource;
    this.ports = ports;
    this.antenas = antenas;
    this.price = price;

    articleSection.innerHTML += 
    `
        <article>
            <h2> ${name} </h2>
            <img src="${imgSource}" alt="">
            <p> 
                <strong>Number of Ethernet Ports: </strong>: ${ports} <br>
                <strong>Antennas: </strong>: ${antenas} <br>
                <strong>PRICE</strong>: ${price} <br>
                <button class="buy"> Buy </button>
            </p>
        </article>
    `
  }

  new Router("Linksys AC1000", "../../images/Router/Linksys-AC1000.jpg", '1x Fast Ethernet WAN port 4x Fast Ethernet LAN ports', "2x external, non-detachable antennas", "$33.09");

  new Router("Tenda AC18", "../../images/Router/Tenda-AC18-AC-1900.jpg", '1x Fast Ethernet WAN port 5x Fast Ethernet LAN ports',"3*3dBi external dual band antennas", "$115.49");

  new Router("TP-Link Archer AC1900", "../../images/Router/TP-Link-Archer-AC-1900.png", "1 WAN Port, 3x Fast Ethernet LAN ports ", '3*3dBi external dual band antennas', "$87.99");

  new Router("TP-Link Archer AX3000 ", "../../images/Router/TP-Link-AX3000.jpg", 'Four Gigabit LAN port ports, one Gigabit WAN port',"Four high-gain external antennas and Beamforming technology", "$39.99");


  let buyButton = document.getElementsByClassName("buy");
  for (var i = 0, len = buyButton.length; i < len; i++) {
      
    buyButton[i].addEventListener("click", () => {
        hideShowPopUp.style.display = "block"
    })
  }
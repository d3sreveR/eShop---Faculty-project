let articleSection = document.getElementById("articleSection");
let buyButton = document.getElementById("buy");


function Laptop(name, imgSource, display, hdd, ram, cpu, gpu, price) {
    this.name = name;
    this.imgSource = imgSource;
    this.display = display;
    this.hdd = hdd;
    this.ram = ram;
    this.cpu = cpu;
    this.gpu = gpu;
    this.price = price;

    articleSection.innerHTML += 
    `
        <article>
            <h2> ${name} </h2>
            <img src="${imgSource}" alt="">
            <p> 
                <strong>DISPLAY</strong>: ${display}  <br>
                <strong>HDD/SSD</strong>: ${hdd} <br>
                <strong>RAM</strong>: ${ram} <br>
                <strong>CPU</strong>: ${cpu} <br>
                <strong>GPU</strong>: ${gpu} <br>
                <strong>PRICE</strong>: ${price} <br>
                <button id="buy"> Buy </button>
            </p>
        </article>
    `
  }

  new Laptop("Acer predator G9 593", "../../images/laptop/Acer-predator-G9-593.jpg", " 15.6”, Full HD (1920 x 1080), IPS", "1000GB SSD + 1000GB HDD", "16GB", "Intel Core i7-7700HQ", "NVIDIA GeForce GTX 1070", "$1000");

  new Laptop("Asus Rog Strix G", "../../images/laptop/Asus-Rog-Strix-G-.jpg", " 17.3”, LED-backlit FHD", "1TB 5400 rpm SATA HDD + 512 SSD", "16 GB, 2 x SO-DIMM", "Intel Core i7 9750H", "NVIDIA GeForce® GTX 1650", "$1200");

  new Laptop("Dell Alienware 17", "../../images/laptop/Dell-Alienware-17.jpg", " 17.3”, Full HD (1920 x 1080), IPS", "1TB HDD", "16GB", "Intel Core i7 6th Gen 6700HQ", "NVIDIA GeForce GTX 765m", "$1000");

  new Laptop("HP Omen", "../../images/laptop/HP-Omen-.jpg", " 15.6-inch 3840x2160 (4K) IPS with G-Sync", "2TB Seagate HDD, 256GB Toshiba NVMe M.2 SSD", "16GB DDR4", "Intel Core i7-7700HQ", "NVIDIA GeForce GTX 1060 Max-Q", "$1000");


buyButton.addEventListener("click", () => {} )
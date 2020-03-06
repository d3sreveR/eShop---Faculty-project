let laptop = document.getElementById("laptopContainer");
let mouse = document.getElementById("mouseContainer");
let mousepad = document.getElementById("mousepadContainer");
let keyboard = document.getElementById("keyboardContainer");
let headset = document.getElementById("headsetContainer");
let cases = document.getElementById("caseContainer");
let router = document.getElementById("routerContainer");
let ram = document.getElementById("ramMemoryContainer");
let hdd = document.getElementById("hdd");
let ssd = document.getElementById("ssd");

// Redirect
laptop.addEventListener("click", () => {
    window.location.href = "./store/laptop/laptops.html";
})


mouse.addEventListener("click", () => {
    window.location.href = "./store/mice/mice.html";
})

mousepad.addEventListener("click", () => {
    window.location.href = "./store/mousepad/mousepad.html";
})

keyboard.addEventListener("click", () => {
    window.location.href = "./store/keyboard/keyboard.html";
})

headset.addEventListener("click", () => {
    window.location.href = "./store/headset/headset.html";
})

cases.addEventListener("click", () => {
    window.location.href = "./store/cases/case.html";
})

router.addEventListener("click", () => {
    window.location.href = "./store/router/routers.html";
})

ram.addEventListener("click", () => {
    window.location.href = "./store/ram/ram.html";
})

hdd.addEventListener("click", () => {
    window.location.href = "./store/hdd/hdd.html";
})

ssd.addEventListener("click", () => {
    window.location.href = "./store/ssd/ssd.html";
})
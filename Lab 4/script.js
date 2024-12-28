const slider = document.getElementById("slider");
const images = slider.querySelectorAll("img");

let currentIndex = 0;
let interval;

function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
}

function startSlider() {
    interval = setInterval(showNextImage, 2000);
}

function resetSlider() {
    clearInterval(interval);
    images[currentIndex].classList.remove("active");
    currentIndex = 0;
    images[currentIndex].classList.add("active");
}

slider.addEventListener("mouseenter", startSlider);
slider.addEventListener("mouseleave", resetSlider);

//Ex2
const personSelect = document.getElementById("select");
const personDetails = document.getElementById("details");
let peopleData = [];

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        peopleData = data;
        dropDown();
    })
    .catch(error => console.error("Error loading JSON:", error));

function dropDown() {
    peopleData.forEach(person => {
        const option = document.createElement("option");
        option.value = person.name;
        option.textContent = person.name;
        personSelect.appendChild(option);
    });
}

function displayDetails(name) {
    const person = peopleData.find(p => p.name === name);
    if (person) {
        document.getElementById("age").textContent = person.age;
        document.getElementById("email").textContent = person.email;
    } else {
        document.getElementById("age").textContent = "";
        document.getElementById("email").textContent = "";
    }
}

personSelect.addEventListener("change", function () {
    const selectedName = this.value;
    displayDetails(selectedName);
});

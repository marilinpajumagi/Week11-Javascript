const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["doggo1.webp", "doggo2.jpeg", "doggo3.jpeg", "doggo4.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
}

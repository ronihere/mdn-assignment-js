const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
let filename = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];
/* Declaring the alternative text for each image file */
let altText = ["alt1", "alt2", "alt3", "alt4", "alt5"];
/* Looping through images */
for (let i = 0; i < filename.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", filename[i]);
  newImage.setAttribute("alt", altText[i]);
  thumbBar.appendChild(newImage);
  // newImage.addEventListener('click', bigDisplay());
  // console.log(filename[i]);
}
//event listener to every thumbar img
thumbBar.addEventListener("click", (e) => {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.src;
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (e) => {
  if (e.target.className === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

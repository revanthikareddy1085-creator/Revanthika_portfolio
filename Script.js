const text = [
"Computer Science Student",
"Python Developer",
"Data Analytics Learner",
"Frontend Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

current = text[i];

if (!isDeleting) {

document.getElementById("typing").textContent =
current.substring(0, j++);

if (j > current.length) {
isDeleting = true;
setTimeout(type, 1000);
return;
}

} else {

document.getElementById("typing").textContent =
current.substring(0, j--);

if (j == 0) {
isDeleting = false;
i++;
if (i == text.length) i = 0;
}
}

setTimeout(type, isDeleting ? 60 : 120);

}

type();

window.addEventListener("scroll", () => {

document.querySelectorAll("section").forEach(sec => {

const top = window.scrollY;

const offset = sec.offsetTop - 300;

if (top > offset) {

sec.style.opacity = "1";
sec.style.transform = "translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec => {
sec.style.opacity = "0";
sec.style.transform = "translateY(80px)";
sec.style.transition = "1s";
});

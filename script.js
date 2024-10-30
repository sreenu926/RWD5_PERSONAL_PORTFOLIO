// const cursor = document.querySelector(".cursor");
// const cursorFollower = document.querySelector(".cursor-follower");

// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.clientX + "px";
//   cursor.style.top = e.clientY + "px";
//   cursorFollower.style.left = e.clientX - 10 + "px";
//   cursorFollower.style.top = e.clientY - 10 + "px";
// });

const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

let lastX = 0;
let lastY = 0;

function updateCursor(e) {
  const newX = e.clientX;
  const newY = e.clientY;

  // Calculate the difference in position for smoother transition
  const deltaX = (newX - lastX) / 1; // Adjust the division factor for desired speed
  const deltaY = (newY - lastY) / 1;

  lastX = newX;
  lastY = newY;

  cursor.style.left = lastX + "px";
  cursor.style.top = lastY + "px";
  cursorFollower.style.left = lastX - 10 + "px";
  cursorFollower.style.top = lastY - 10 + "px";
}

document.addEventListener("mousemove", updateCursor);

// Call the update function initially to avoid a jump on first mousemove
requestAnimationFrame(updateCursor);

const myDiv1 = document.getElementById("myDIV1");
const hide1 = document.getElementById("hide1");
const myDiv2 = document.getElementById("myDIV2");
const hide2 = document.getElementById("hide2");
const myDiv3 = document.getElementById("myDIV3");
const hide3 = document.getElementById("hide3");

myDiv1.addEventListener("mouseover", () => {
  hide1.style.display = "block";
  hide1.style.opacity = 1;
});

myDiv1.addEventListener("mouseout", () => {
  hide1.style.display = "none";
  hide1.style.opacity = 0;
});

myDiv2.addEventListener("mouseover", () => {
  hide2.style.display = "block";
  hide2.style.opacity = 1;
});

myDiv2.addEventListener("mouseout", () => {
  hide2.style.display = "none";
  hide2.style.opacity = 0;
});

myDiv3.addEventListener("mouseover", () => {
  hide3.style.display = "block";
  hide3.style.opacity = 1;
});

myDiv3.addEventListener("mouseout", () => {
  hide3.style.display = "none";
  hide3.style.opacity = 0;
});

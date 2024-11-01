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

const rwd = document.getElementById("rwd");
const img1 = document.getElementById("img1");

rwd.addEventListener("mouseover", function () {
  img1.style.height = "480px";
});

rwd.addEventListener("mouseout", function () {
  img1.style.height = "0";
});

const jsds = document.getElementById("jsds");
const img2 = document.getElementById("img2");

jsds.addEventListener("mouseover", function () {
  img2.style.height = "480px";
});

jsds.addEventListener("mouseout", function () {
  img2.style.height = "0";
});

const fedl = document.getElementById("fedl");
const img3 = document.getElementById("img3");

fedl.addEventListener("mouseover", function () {
  img3.style.height = "480px";
});

fedl.addEventListener("mouseout", function () {
  img3.style.height = "0";
});

// 1. Selecting Elements:

const cursor = document.querySelector(".cursor"); // Select the element with the class .cursor and store it in the cursor variable. 
const cursorFollower = document.querySelector(".cursor-follower"); // Select the element with the class .cursor-follower and store it in the cursorFollower variable. 

// 2. Tracking Mouse Movements

let lastX = 0;
let lastY = 0;

// 3. updateCursor Function:

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

// 4. Event Listeners and Initial Update:

document.addEventListener("mousemove", updateCursor);

// Call the update function initially to avoid a jump on first mousemove
requestAnimationFrame(updateCursor);

// 5. Animating Certificate Heights:

const elements = [
  { elementId: "csm", imgId: "img1", height: { small: 220, large: 380 } },
  { elementId: "gpm", imgId: "img2", height: { small: 240, large: 400 } },
  { elementId: "rwd", imgId: "img3", height: { small: 220, large: 380 } },
  { elementId: "jsds", imgId: "img4", height: { small: 220, large: 380 } },
  { elementId: "fedl", imgId: "img5", height: { small: 220, large: 380 } },
];

function handleHover(element) {
  const img = document.getElementById(element.imgId);
  const certHeight = img.offsetHeight; // Get the actual height of the certificate
  // Animate height change
  img.style.transition = "height 0.7s ease-in-out";
  img.style.height =
    window.innerWidth <= 768
      ? `${element.height.small}px`
      : `${element.height.large}px`;
}

function handleMouseOut(element) {
  const img = document.getElementById(element.imgId);
  // Animate height back to 0
  img.style.transition = "height 0.7s ease-in-out";
  img.style.height = "0";
}

elements.forEach((element) => {
  const el = document.getElementById(element.elementId);
  el.addEventListener("mouseover", () => handleHover(element));
  el.addEventListener("mouseout", () => handleMouseOut(element));
});

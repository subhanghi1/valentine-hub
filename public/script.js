
// const yesBtn = document.getElementById("yesBtn");
// const noBtn = document.getElementById("noBtn");
// const message = document.getElementById("message");

// let petalsInterval = null;
// let punchbagInterval = null;

// noBtn.addEventListener("click", () => {
//   message.innerText = "😤 aa thuu.. retry!";
//   stopPetals();
//   clearFallingItems();
//   startPunchbags();
// });

// yesBtn.addEventListener("click", () => {
//   message.innerText = "💘 Yayyyyy! Love is in the air 💘";
//   stopPunchbags();
//   clearFallingItems();
//   startPetals();
// });

// function startPetals() {
//   if (petalsInterval) return;
//   petalsInterval = setInterval(createPetal, 200);
// }

// function stopPetals() {
//   if (petalsInterval) {
//     clearInterval(petalsInterval);
//     petalsInterval = null;
//   }
// }

// function startPunchbags() {
//   if (punchbagInterval) return;
//   punchbagInterval = setInterval(createPunchbag, 200);
// }

// function stopPunchbags() {
//   if (punchbagInterval) {
//     clearInterval(punchbagInterval);
//     punchbagInterval = null;
//   }
// }

// function clearFallingItems() {
//   document.querySelectorAll(".petal").forEach(el => el.remove());
// }

// function createPetal() {
//   const petal = document.createElement("img");
//   petal.src = "images/petal.png";
//   petal.classList.add("petal");

//   spawnFromRandomSide(petal);

//   const size = Math.random() * 15 + 15;
//   petal.style.width = size + "px";

//   const duration = Math.random() * 3 + 4;
//   petal.style.animationDuration = duration + "s";

//   document.body.appendChild(petal);

//   setTimeout(() => {
//     petal.remove();
//   }, duration * 1000);
// }

// function createPunchbag() {
//   const punchbag = document.createElement("img");
//   punchbag.src = "images/punchbag.png";
//   punchbag.classList.add("petal"); // reuse animation

//   spawnFromRandomSide(punchbag);

//   const size = Math.random() * 20 + 25;
//   punchbag.style.width = size + "px";

//   const duration = Math.random() * 2 + 3;
//   punchbag.style.animationDuration = duration + "s";

//   document.body.appendChild(punchbag);

//   setTimeout(() => {
//     punchbag.remove();
//   }, duration * 1000);
// }

// function spawnFromRandomSide(element) {
//   const side = Math.random();

//   if (side < 0.33) {
//     element.style.left = Math.random() * window.innerWidth + "px";
//     element.style.top = "-50px";
//   } else if (side < 0.66) {
//     element.style.left = "-50px";
//     element.style.top = Math.random() * window.innerHeight + "px";
//   } else {
//     element.style.left = window.innerWidth + "px";
//     element.style.top = Math.random() * window.innerHeight + "px";
//   }
// }


const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let petalsInterval = null;
let punchbagInterval = null;

noBtn.addEventListener("click", () => {
  message.innerText = "😤 aa thuu.. retry!";
  stopPetals();
  clearFallingItems();
  startPunchbags();
});

yesBtn.addEventListener("click", () => {
  message.innerText = "💘 Yayyyyy! Love is in the air 💘";
  stopPunchbags();
  clearFallingItems();
  startPetals();

  // 🔥 NEW: redirect after petals animation
  setTimeout(() => {
    stopPetals();        // optional but clean
    clearFallingItems();
    window.location.href = "/special";
  }, 3000); // 3 sec romantic pause
});

function startPetals() {
  if (petalsInterval) return;
  petalsInterval = setInterval(createPetal, 200);
}

function stopPetals() {
  if (petalsInterval) {
    clearInterval(petalsInterval);
    petalsInterval = null;
  }
}

function startPunchbags() {
  if (punchbagInterval) return;
  punchbagInterval = setInterval(createPunchbag, 200);
}

function stopPunchbags() {
  if (punchbagInterval) {
    clearInterval(punchbagInterval);
    punchbagInterval = null;
  }
}

function clearFallingItems() {
  document.querySelectorAll(".petal").forEach(el => el.remove());
}

function createPetal() {
  const petal = document.createElement("img");
  petal.src = "images/petal.png";
  petal.classList.add("petal");

  spawnFromRandomSide(petal);

  const size = Math.random() * 15 + 15;
  petal.style.width = size + "px";

  const duration = Math.random() * 3 + 4;
  petal.style.animationDuration = duration + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

function createPunchbag() {
  const punchbag = document.createElement("img");
  punchbag.src = "images/punchbag.png";
  punchbag.classList.add("petal"); // reuse animation

  spawnFromRandomSide(punchbag);

  const size = Math.random() * 20 + 25;
  punchbag.style.width = size + "px";

  const duration = Math.random() * 2 + 3;
  punchbag.style.animationDuration = duration + "s";

  document.body.appendChild(punchbag);

  setTimeout(() => {
    punchbag.remove();
  }, duration * 1000);
}

function spawnFromRandomSide(element) {
  const side = Math.random();

  if (side < 0.33) {
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.top = "-50px";
  } else if (side < 0.66) {
    element.style.left = "-50px";
    element.style.top = Math.random() * window.innerHeight + "px";
  } else {
    element.style.left = window.innerWidth + "px";
    element.style.top = Math.random() * window.innerHeight + "px";
  }
}


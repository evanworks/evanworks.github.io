function putStuffOnCard(id, stuff) {
  card = document.getElementById(id);
  card.children[0].src = stuff.img;
  card.children[1].innerText = stuff.title;
  card.children[2].innerHTML = stuff.text;
  if (id === "main-card") {
    card.children[3].onclick = () => {
      window.open(stuff.site, '_blank').focus();
    }
  }
  getGithubData(stuff.repo[0], stuff.repo[1]).then(data => {
    if (data) document.getElementById("last-updated").innerHTML = "Last Updated " + data;
  });
  
}

async function getGithubData(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    const data = await response.json();
    const updatedAt = new Date(data.updated_at);
    return updatedAt.toISOString().split("T")[0];
  } catch (error) {
    console.error("GitHub API error:", error);
    return false;
  }
}

const littleWorld = {
  img: "mountain.png",
  title: "LITTLE WORLD",
  text: `
  Wander. Build. Question your choices. Learn from your mistakes.<br/> 
  Completely alone, in a weird little world full of secrets. And cows.`,
  site: "https://evanworks.github.io/little-world",
  repo: ["evanworks", "little-world"]
}
const yeOlde = {
  img: "eye.png",
  title: "YE OLDE",
  text: `
  Fight potentially lethal monsters! 
  Collect loot and treasure!
  Upgrade your weapons in safe, friendly-looking shops!
  Die!
  `,
  site: "https://evanworks.github.io/ye-olde",
  repo: ["evanworks", "ye-olde"]
}
const carrotClicker = {
  img: "box.png",
  title: "CARROT CLICKER",
  text: `
  A simple farming game. Slowly grow carrots while you grow your farm, and enjoy the numerous jokes along the way.`,
  site: "https://evanworks.github.io/carrot-clicker",
  repo: ["evanworks", "carrot-clicker"]
} 
const pythonFishing = {
  img: "sunset.png",
  title: "PYTHON FISHING",
  text: `
  Fish for oddities, chat with locals. Upgrade your rod, enjoy the simple graphics, and lose track of time.`,
  site: "https://evanworks.github.io/fishing",
  repo: ["evanworks", "fishing"]
}
const asciiBlackjack = {
  img: "poker.png",
  title: "ASCII BLACKJACK",
  text: `
  Gamble away your life savings, or dominate the poker table by blatantly cheating. Upgrade your cards and learn unique playstyles.`,
  site: "https://evanworks.github.io/ascii-blackjack",
  repo: ["evanworks", "ascii-blackjack"]
}

putStuffOnCard("main-card", carrotClicker);
putStuffOnCard("left", yeOlde);

const cardOrder = [carrotClicker, littleWorld,  pythonFishing, asciiBlackjack, yeOlde];

function pickCorrectCard(currentCard) {
  console.log(currentCard);
  let leftCard = cardOrder[(currentCard + 1) % cardOrder.length];
  let mainCard = cardOrder[currentCard]
  let rightCard = cardOrder[(currentCard - 1 + cardOrder.length) % cardOrder.length];

  putStuffOnCard("left", leftCard);
  putStuffOnCard("main-card", mainCard)
  putStuffOnCard("right", rightCard)
}

let correctCard = 0;

pickCorrectCard(correctCard)

document.getElementById("arrow-left").addEventListener("click", () => {
  correctCard++;
  if (correctCard >= cardOrder.length) {
    correctCard = 0;
  }
  pickCorrectCard(correctCard)
});
document.getElementById("arrow-right").addEventListener("click", () => {
  correctCard--;
  if (correctCard < 0) {
    correctCard = cardOrder.length - 1;
  }
  pickCorrectCard(correctCard)
});

/*document.querySelectorAll(".arrow").forEach(img => {
  img.addEventListener("mouseover", () => {
    img.src = "arrow-hover.png";
  });
  img.addEventListener("mouseout", () => {
    img.src = "arrow.png";
  });
  img.addEventListener("click", () => {
    img.src = "arrow-rocket.gif"
  });
});*/

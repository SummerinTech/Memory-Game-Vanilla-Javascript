const cards = [
	{ name: "cheeseburger", img: "/src/images/cheeseburger.png" },
	{ name: "fries", img: "/src/images/fries.png" },
	{ name: "hotdog", img: "/src/images/hotdog.png" },
	{ name: "ice-cream", img: "/src/images/ice-cream.png" },
	{ name: "milkshake", img: "/src/images/milkshake.png" },
	{ name: "pizza", img: "/src/images/pizza.png" },
	{ name: "cheeseburger", img: "/src/images/cheeseburger.png" },
	{ name: "fries", img: "/src/images/fries.png" },
	{ name: "hotdog", img: "/src/images/hotdog.png" },
	{ name: "ice-cream", img: "/src/images/ice-cream.png" },
	{ name: "milkshake", img: "/src/images/milkshake.png" },
	{ name: "pizza", img: "/src/images/pizza.png" },
];

cards.sort(() => 0.5 - Math.random());
console.log(cards);

const grid = document.querySelector(".grid");
let cardsChosen = [];
let cardsChosenIds = [];

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let card = document.createElement("img");
		card.classList.add("pointer");
		card.setAttribute("src", "src/images/blank.png");
		card.setAttribute("data-id", i);
		card.addEventListener("click", showCard);
		grid.appendChild(card);
	}

	console.log(card);
}

function showCard() {
	let cardId = this.getAttribute("data-id");
	cardsChosen.push(cards[cardId].name);
	cardsChosenIds.push(cardId);
	this.setAttribute("src", cards[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}

function checkForMatch() {}

createBoard();

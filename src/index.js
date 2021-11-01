const cards = [
	{ name: "blank", img: "/src/images/blank.png" },
	{ name: "cheeseburger", img: "/src/images/cheeseburger.png" },
	{ name: "fries", img: "/src/images/fries.png" },
	{ name: "hotdog", img: "/src/images/hotdog.png" },
	{ name: "ice-cream", img: "/src/images/ice-cream.png" },
	{ name: "milkshake", img: "/src/images/milkshake.png" },
	{ name: "pizza", img: "/src/images/pizza.png" },
	{ name: "white", img: "/src/images/white.png" },
	{ name: "blank", img: "/src/images/blank.png" },
	{ name: "cheeseburger", img: "/src/images/cheeseburger.png" },
	{ name: "fries", img: "/src/images/fries.png" },
	{ name: "hotdog", img: "/src/images/hotdog.png" },
	{ name: "ice-cream", img: "/src/images/ice-cream.png" },
	{ name: "milkshake", img: "/src/images/milkshake.png" },
	{ name: "pizza", img: "/src/images/pizza.png" },
	{ name: "white", img: "/src/images/white.png" },
];

cards.sort(() => 0.5 - Math.random());
console.log(cards);

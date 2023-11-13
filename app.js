//
//Image Randomizer Logic
//

var myPix = new Array(
	"img/1.jpg",
	"img/2.jpg",
	"img/3.jpg",
	"img/4.jpg",
	"img/5.jpg",
	"img/6.jpg",
	"img/6.jpg",
	"img/7.jpg",
	"img/8.jpg",
	"img/9.jpg",
	"img/10.jpg"
);
var myPix2 = new Array(
	"img2/1.jpg",
	"img2/2.jpg",
	"img2/3.jpg",
	"img2/4.jpg",
	"img2/5.jpg",
	"img2/6.jpg",
	"img2/7.jpg",
	"img2/8.jpg",
	"img2/10.jpg"
);
function choosePic() {
	var randomNum = Math.floor(Math.random() * myPix2.length);
	document.getElementById("myPicture2").src = myPix2[randomNum];

	var randomNum = Math.floor(Math.random() * myPix.length);
	document.getElementById("myPicture").src = myPix[randomNum];
}

choosePic();
window.onload = choosePic;

//
//Frame and Background styles
//

const img = document.querySelectorAll("img");

function whiteFrame() {
	img.forEach((el) => {
		el.classList.remove("frame-black");
		el.classList.remove("frame-wood");
		el.classList.remove("frame-none");
		el.classList.add("frame-white");
	});
}

function woodFrame() {
	img.forEach((el) => {
		el.classList.remove("frame-black");
		el.classList.remove("frame-white");
		el.classList.remove("frame-none");
		el.classList.add("frame-wood");
	});
}

function blackFrame() {
	img.forEach((el) => {
		el.classList.remove("frame-wood");
		el.classList.remove("frame-white");
		el.classList.remove("frame-none");
		el.classList.add("frame-black");
	});
}
function noFrame() {
	img.forEach((el) => {
		el.classList.remove("frame-black");
		el.classList.remove("frame-white");
		el.classList.remove("frame-wood");
		el.classList.add("frame-none");
	});
}

const bg = document.querySelector("body");

function bgWhite() {
	bg.classList.remove("bg-black");
	bg.classList.remove("bg-gray");
	bg.classList.add("bg-white");
}
function bgBlack() {
	bg.classList.remove("bg-white");
	bg.classList.remove("bg-gray");
	bg.classList.add("bg-black");
	const title = document.querySelectorAll(".title");
	title.forEach((el) => {
		el.classList.add("bg-black");
	});
}

function bgGray() {
	bg.classList.remove("bg-black");
	bg.classList.remove("bg-white");
	bg.classList.add("bg-gray");
}

//
//Toggle Info
//
function reveal() {
	var element = document.querySelector(".info2");
	element.classList.toggle("toggled");
}

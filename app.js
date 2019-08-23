window.onload = choosePic;

var myPix = new Array(
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg"
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

var myInterval = setInterval(() => {
  choosePic();
}, 10 * 1000);

function clearMyInterval() {
  console.error("clearing interval");
  clearInterval(myInterval);
}
/*/
//2nd img

window.onload = choosePic;

var myPix = new Array(
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg"
)


function choosePic2() {
  var randomNum = Math.floor(Math.random() * myPix2.length);
  document.getElementById("myPicture2").src = myPix2[randomNum];
}
/*/

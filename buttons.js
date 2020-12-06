var plusOne = document.getElementById("plusOne");
var plusTwo = document.getElementById("plusTwo");
var plusThree = document.getElementById("plusThree");

var container01 = document.getElementById("container01");

var image0 = document.getElementById("image0");
var bigimage0 = document.getElementById("bigimage0");

var countingbtn0 = 0;
var countingbtn1 = 0;
var countingbtn2 = 0;

function myFunction1() {
  countingbtn0++;
  plusOne.innerHTML =countingbtn0;
  image0.src = "images/1.jpg";
  container01.style.backgroundImage = "url('images/bg1.jpg')";
  plusOne.textContent = countingbtn0;
}

function myFunction2() {
  countingbtn1++;
  plusTwo.innerHTML =countingbtn1;
  image0.src = "images/2.jpg";
  container01.style.backgroundImage = "url('images/bg2.jpg')";
  plusTwo.textContent = countingbtn1;
}

function myFunction3() {
  countingbtn2++;
  plusThree.innerHTML =countingbtn2;
  image0.src = "images/3.jpg";
  container01.style.backgroundImage = "url('images/bg3.jpg')";
  plusThree.textContent = countingbtn2;
}

plusOne.addEventListener("click", function() {
	myFunction1();
});

plusTwo.addEventListener("click", function() {
	myFunction2();	
});

plusThree.addEventListener("click", function() {
	myFunction3();
});
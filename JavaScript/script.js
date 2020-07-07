// console.log("connected")
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

//show cart 

(function(){
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function(){
    cart.classList.toggle("show-cart")
  });

})();




// cart
if(document.readyState == "loeading"){
  document.addEventListener("DOMCounterloaded",ready)
}else{
  ready()
}
 function ready(){
   let removeCartButton = document.getElementsByClassName("btn-danger")
   for ( let i = 0 ; i < removeCartButton.length ; i++){
     let button = removeCartButton[i]
     button.addEventListener("click", removeCartButton)
   }
 }

function removeCartItem(){
  let buttonClickd = event.target
  buttonClickd.parentElemnt.parentElemnt.remove()
}

// let removeCartButton = document.getElementsByClassName("button-remove")
// console.log(removeCartButton)
// for (let i=0 ; i < removeCartButton.length ; i++){
//   let button = removeCartButton[i]
//   button.addEventListener("click", function(event){
//     let buttonClickd = event.target
//     buttonClickd.parentElemnt.parentElemnt.remove()
//     updatedCartTotal()
//   })
// }

function updatedCartTotal(){
  let CartItemCountener = document.getElementsByClassName("cart-item")[0]
  let cartRow = CartItemCountener.getElementsByClassName("cart-row")
  let total = 0 
  for (let i = 0 ; i < cartRow.length ; i++){
    let cartRow = cartRow[i]
    let priceElemant = cartRow.getElementsByClassName("cart-price")[0]
    let quantityElement = cartRow.getElementsByClassName("car-quantity-input")[0]
    let price = parseFloat(priceElemant.innertext.replace("$" , " "))
    let quantity = quantityElement.value
    total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innertextn = "$" +total
}
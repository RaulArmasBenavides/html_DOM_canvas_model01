//Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () =>{
    cart.classList.add("active");
}
closeCart.onclick =() =>{
    console.log("cerrando");
    cart.classList.remove("active");
}

function ready(){
    var removeCartButtons = document.querySelector('cart-remove');
    console.log(removeCartButtons);
    for(var i=0;i<removeCartButtons.length;i++)
    {
        var button = removeCartButtons[i];
        button.addEventListener("click",removeCartItem);
    }
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

function addCartClicked(event)
{
    
}
//update total 
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    let total = 0;
    for(var i =0 ; i<cartBoxes.length ;i++)
    {
        let CartBox = cartBoxes[i];
        let priceElement = CartBox.getElementsByClassName('cart-price')[0];
        let quantityElement = CartBox.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerText.replace("$","")); // se reemplza el símbolo de la moneda
        let quantity = quantityElement.value;
        total = total + ( price* quantity);


        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
     }
}
var beds = document.querySelectorAll("main .pro-cont .product")
var bedName = document.querySelector("main .pell .cart .name")
var bedPrice = document.querySelector("main .pell .cart .price")
var price = document.querySelector("main .pell .total .toPrice")
var form1 = document.querySelector("main .pell .total form")
var input = document.querySelector("main .pell .total form .input1")
var btn1 = document.querySelector("main .pell .total form .input2")
var btn2 = document.getElementById("clear")
var restCon = document.querySelector("main .pell .total .rest-con")
var restPrice = document.querySelector("main .pell .total .rest")
var counter = 1
var totalPrice = 0


beds.forEach(function (item) {
    item.onclick = function () {
        bedName.innerHTML += counter++ + '- ' + item.getAttribute("bedName") + '<br>'
        bedPrice.innerHTML += item.getAttribute("price") + '$<br>'
        totalPrice += +(item.getAttribute("price"))
        price.innerHTML = totalPrice + '$'
        form1.style.visibility = 'visible'
        form1.style.opacity = '1'
    }
})



btn1.onclick = function () {
        restCon.style.opacity = '1'
        restCon.style.visibility = 'visible'
        restPrice.innerHTML = (input.value - totalPrice) + '$'
}

btn2.onclick = function () {
    bedName.innerHTML = ''
    bedPrice.innerHTML = ''
    counter = 1
    totalPrice = 0
    price.innerHTML = 0
    input.value = ''
    restCon.style.opacity = '0'
    restCon.style.visibility = 'hidden'
    form1.style.opacity = '0'
    form1.style.visibility = 'hidden'
}


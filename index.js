var close = document.getElementById("popup-close")
var popupoffer = document.getElementById("popup")

close.addEventListener("click", function () {
    popupoffer.style.display = "none"
})

var sidenavbar = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
var closemenu = document.getElementById("closenav")

menu.addEventListener("click", function () {
    sidenavbar.style.left = "0%"
})

closemenu.addEventListener("click", function () {
    sidenavbar.style.left = "-50%"
})

var slides = document.getElementById("image-slide")
var slider_img = slides.querySelectorAll("img")
var right_btn = document.getElementById("img-right")
var left_btn = document.getElementById("img-left")

slider_img.forEach(function (img) {


})
right_btn.addEventListener("click", function () {

    var counter = 0
    if(counter<slider_img.length){
        counter = counter+1
        slider_img[counter].style.display = "block" 
        slider_img[counter-1].style.display = "none"
        
    }
    
})


var close = document.getElementById("popup-close")
var popupoffer = document.getElementById("popup")

close.addEventListener("click",function(){
    popupoffer.style.display ="none"
})

var sidenavbar = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
var closemenu = document.getElementById("closenav")

menu.addEventListener("click",function(){
    sidenavbar.style.left = "0%"
})

closemenu.addEventListener("click",function(){
    sidenavbar.style.left = "-50%"
})
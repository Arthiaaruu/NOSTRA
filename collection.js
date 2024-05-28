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

//search function enable code
var collectioncontainer = document.getElementById("collection-shirts")
var search = document.getElementById("search")
var collectiontlist = collectioncontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0; count< collectiontlist.length; count=count+1){
        var shirtname = collectiontlist[count].querySelector("h2").textContent

        if(shirtname.toUpperCase().indexOf(enteredvalue)<0){
            collectiontlist[count].style.display="none"
        }
        else{
            collectiontlist[count].style.display="block"
        }

    }


})

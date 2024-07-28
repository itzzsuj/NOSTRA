var a=document.querySelector(".cancel")
a.addEventListener("click",function(){
    a.parentElement.style.display="none"
})
var b=document.getElementById("exit")
b.addEventListener("click",function(){
    b.parentElement.style.left="-50%"
    

})

var menu=document.getElementById("list")
menu.addEventListener("click",function(){
    var sidebar=document.querySelector(".sidebar")
    sidebar.style.left=0


})
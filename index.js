var burger =document.getElementById("burger");
var nav = document.getElementById("nav");
burger.addEventListener('click',()=>{
    nav.classList.toggle('hide');
    burger.style.display="none";
})
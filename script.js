window.addEventListener('load', function(){
    const btn=document.getElementById("btn");
    const menu=document.getElementById("menu");

    const move = ()=>{
        menu.classList.toggle("show");
    }
    btn.addEventListener("click",move);



    
})
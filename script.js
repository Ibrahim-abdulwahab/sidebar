window.addEventListener('load', function(){
    const btn=document.getElementById("btn");
    const menu=document.getElementById("menu");
    const close=document.getElementById("close");

    const move = ()=>{
        menu.classList.toggle("show");
    }
    btn.addEventListener("click",move);
    close.addEventListener("click",move);



    
})
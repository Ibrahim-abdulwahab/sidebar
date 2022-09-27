window.addEventListener('load', function(){
    const btn=document.getElementById("btn");
    const menu=document.getElementById("menu");
    let n=0;

    const move = ()=>{
        if (n==0){
            menu.className = "show-side-menu";
            n=1;
        }
        else{
            menu.className = "side-menu";
            n=0;
        }
    }
    btn.addEventListener("click",move);



    
})
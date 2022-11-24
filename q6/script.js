function display(){

    const text=document.getElementById("text");

    const elem=document.getElementById("hider");
    
    elem.addEventListener("click" ,function(){
       
        text.style.display="none";

        setTimeout(()=>{
        
            elem.parentNode.removeChild(elem);
        },3000);
    })

}

display()
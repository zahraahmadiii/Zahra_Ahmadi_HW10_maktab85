function makelist(content){

    content=prompt("whats your content?");
    let ul=document.getElementById("user_list");

    while(content!==null){
        
        let li=document.createElement("li");
        li.innerText=content;
        ul.appendChild(li);
        content=prompt("make your list")
    }
}

makelist()
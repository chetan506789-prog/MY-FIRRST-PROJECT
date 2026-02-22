const input=document.querySelector("input");
const butoon=document.querySelector("button");
const ul=document.querySelector(".list");
const value=input.value;
function add(){
    const value=input.value;
    if(value==0){return;}
    const div=document.createElement("div");
    const btn=document.createElement("button");
    btn.innerText="delete";
    const bttn=document.createElement("button");
    bttn.innerText="update";
const li=document.createElement("li");
li.textContent=value;
div.appendChild(li);
div.appendChild(btn);
div.appendChild(bttn);
ul.appendChild(div);
input.value="";
btn.addEventListener("click",function (){div.remove();});
bttn.addEventListener("click",function(){const update=prompt("update here");
    console.log("update",update);
    if(update.length>0){li.textContent=update;}    
})
}
butoon.addEventListener("click",add);
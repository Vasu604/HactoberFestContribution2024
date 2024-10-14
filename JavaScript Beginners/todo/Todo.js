let inputtext=document.getElementById("inputtext");
let lists=document.getElementById("lists");
let dlt=document.getElementById("dlt");
let body=document.getElementById("body");
let todolist=document.getElementById("to-do-list");
let mode=document.getElementById("mode");

var check= 0
addlists=()=>{
    if(inputtext.value==""){
        alert("enter task")
    }
    else{
    let li=document.createElement("li");
    li.innerHTML=inputtext.value;
    lists.appendChild(li);

   inputtext.value="";

   deletebtn=document.createElement("button");
   li.appendChild(deletebtn);
   deletebtn.innerHTML="Delete";

   li.querySelector("button").addEventListener("click",remove);
   function remove(){
    li.remove();
   }
 
   li.addEventListener("click",function(){
    if(check==0){
    li.style.textDecoration="line-through";
    check=1;
   }
   else{
      li.style.textDecoration="none";
      check=0;
   }
   })
}
}
dl=0;
body.querySelector("button").addEventListener("click",function(){
    if(dl==0){
        mode.innerHTML="dark"
        mode.style.backgroundColor="black"
        mode.style.color="white"
        body.style.background="lightskyblue";
        todolist.style.color="white";
        todolist.style.backgroundColor="white"
        todolist.style.border="5px solid black"
       

    dl=1;
    }
    else{
        mode.innerHTML="light"
        mode.style.backgroundColor="white"
        mode.style.color="black"
    body.style.backgroundColor="black";
    todolist.style.color="black";
    todolist.style.backgroundColor="rgb(1,1,37)";
    todolist.style.border="5px solid white"

        dl=0;
    }

})






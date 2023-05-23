
const addBtn = document.getElementById("btn");
const input = document.getElementById("input");
const myUl = document.getElementById("myUl");


// skapa en ny li vid knapp tryckning
addBtn.addEventListener("click", function() {
  
    var li = document.createElement("li");
    li.innerHTML= input.value;
    myUl.appendChild(li);
    
    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "X";
    li.appendChild(closeBtn);


 
    input.value = "";

li.addEventListener("click" , function() {
    li.style.textDecoration = "line-through";
})

li.addEventListener("dblclick", function() {
    li.style.textDecoration = "none";
})

closeBtn.addEventListener("click", e => {
    myUl.removeChild(li);
})
}); 


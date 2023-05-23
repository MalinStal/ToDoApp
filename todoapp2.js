
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

    //stryker över texten när en uppgift är klar
li.addEventListener("click" , function() {
    li.style.textDecoration = "line-through";
})
//debbelklicka för att ta bort sträcket om man behöver göra uppgiften igen
li.addEventListener("dblclick", function() {
    li.style.textDecoration = "none";
})
//tar bort uppgiften när du klickar på x knappen
closeBtn.addEventListener("click", e => {
    myUl.removeChild(li);
})
}); 

 
function fetchToDo(){
fetch('https://dummyjson.com/todos?limit=10')
.then(res => res.json())
.then(console.log); //((json) => getToDo(json))

};
fetchToDo()
function getToDo (get) {
    
  //har en ide om att lopa igenom de färdiga todos för att skriva ut dom i en list ordning 
    var todo = document.createElement("li");
    todo.innerHTML= get.todos[0].todo + "    ";
    myUl.appendChild(todo);
    
    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "X";
    todo.appendChild(closeBtn);
}


const list=document.getElementById("destinations")
// const list4=document.querySelector("#destinations")
// console.log(list);
// console.log(list4);
// const list2=Array.from(document.getElementById("destinations").children)
// console.log(list2);
const listItem=Array.from(document.querySelectorAll("li"))
// console.log(list3);
const btn=document.getElementById("btn")

// const listItem=Array.from(document.getElementsByClassName("listItem"))
// console.log(listItem);
// const listItem=document.querySelectorAll(".listItem")
// console.log(listItem2);

function selectFunction(element){
    // console.log(element.target,element.target.parentNode);
    listItem.forEach(element=>element.classList.remove("blue"))
    element.target.classList.toggle("blue")
    document.getElementById("output").innerText="you're going to "+element.target.innerText.toUpperCase();
    document.getElementById("chose").style.visibility="hidden"
    document.getElementById("flight").style.visibility="visible"
    list.style.visibility="hidden"
    btn.innerText="chose City again"
}

list.addEventListener("click",selectFunction)

btn.addEventListener("click",function(){
        list.style.visibility="visible"
        btn.innerText="hide" 
})

const list2=document.getElementById("flight")
const listItem2=Array.from(document.getElementById("flight").children)
console.log(list2);
console.log(listItem2);
function selectFlight(element){
    listItem2.forEach(element=>element.classList.remove("red"))
    element.target.classList.toggle("red")
}
list2.addEventListener("click",selectFlight)
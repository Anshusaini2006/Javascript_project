const btn = document.getElementById("btn")
const input = document.getElementById("input")
const values = document.getElementById("value")

function addItem(inputValue) {
    let li = document.createElement("li")
    li.textContent = inputValue    
    let deletebtn = document.createElement("button")
    deletebtn.textContent="Delete"
    li.appendChild(deletebtn)
    values.appendChild(li)
    deletebtn.addEventListener("click",()=>{
    values.removeChild(li)
    })
}

btn.addEventListener("click",()=>{
    let inputValue = input.value.trim()
    if (inputValue == "") {
        alert("Please Your Work")
    }
    input.value=""
    addItem(inputValue)
})

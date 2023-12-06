const  notescontainer = document.querySelector(".note-container")
const createBtn = document.querySelector(".btn")

let notes = document.querySelectorAll(".input-box")


function show(){
    const store = localStorage.getItem("notes")
    if(store){
        notescontainer.innerHTML = store
    }
}
show()

function updatestorage (){
    localStorage.setItem("notes",notescontainer.innerHTML)
}
createBtn.addEventListener("click",()=>{    

    const inputbox = document.createElement('p')
    const img = document.createElement("img")
    inputbox.setAttribute("contenteditable" ,"true")
    inputbox.className  = "input-box"
    img.src = "images/delete.png"
    notescontainer.appendChild(inputbox).appendChild
    (img)
    updatestorage()
})

    notescontainer.addEventListener("click",(elem)=>{
        if(elem.target.tagName === "IMG"){
            elem.target.parentElement.remove()
        }
        else if(elem.target.tagName === "P"){
            elem.target.addEventListener("keyup",function(){
                updatestorage()
            })
        }
    })
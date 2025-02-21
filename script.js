const input = document.querySelector("input")
const taskContainer = document.querySelector("ul")
const addBtn = document.getElementById("add-btn")

taskContainer.style.display="none"

document.addEventListener("keydown",(e)=>{
    console.log(e.key) // string
    if(e.key==="Enter"){
        handleEvent()
        
    }
})

addBtn.addEventListener("click", handleEvent)



function handleEvent() {
    let value = input.value
    

    if (!value) {
        return alert("Are bhaiya, Pahle TODO to Daldo")
    }

    const li = document.createElement("li")
    li.classList.add("todo-item")

    const buttonBox = document.createElement("div")
    buttonBox.classList.add("button-box")

    const editButton = document.createElement("button")
    const deleteButton = document.createElement("button")

    editButton.innerText = "edit"
    editButton.classList.add("list-btn", "edit")
    deleteButton.innerText = "del"
    deleteButton.classList.add("list-btn", "del")



    buttonBox.append(editButton)
    buttonBox.append(deleteButton)

    li.innerText = value
    li.append(buttonBox)
    taskContainer.style.display = "block"
    taskContainer.append(li)

    input.value = ""

    //delete functionality 

    deleteButton.addEventListener("click", (e) => {
        e.target.closest("li").remove()

    })

    //edit functionality 

    editButton.addEventListener("click", (e) => {
        const li = e.target.closest("li")
        const input = document.createElement("input")
        input.type = "text"
        input.classList.add("update-input")

        const existingContent = li.firstChild.textContent

        input.value = existingContent

        const saveBtn = document.createElement("button")
        saveBtn.classList.add("list-btn", "save")
        saveBtn.innerText = "save"

        li.innerHTML = ""
        li.append(input)
        li.append(saveBtn)

        // Save Functionality 

        saveBtn.addEventListener("click", (e) => {
            const li = e.target.closest("li")
            const updatedText = li.firstChild.value
            if (updatedText) {
                li.innerText = updatedText
                li.append(buttonBox)
            } else {
                alert("Kuch to dalo usmien")
            }
        })

    })







}


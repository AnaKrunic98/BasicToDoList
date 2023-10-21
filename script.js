const inputElement = document.querySelector("input")
const addButton = document.querySelector("#add-button")

const tasks = [
    {
        id:1,
        caption:"Test 1"
    },
    {
        id:2,
        caption:"Test 2"
    }
]

function updateListDom () {
    const olElement = document.querySelector("ol")

    olElement.innerHTML = ""

    tasks.forEach((task) => {
        const liElement = `<li>${task.caption}<span onclick="removeTask(event)" data-element-id="${task.id}">x<span></li>`
        olElement.innerHTML += liElement
    })
}
updateListDom()

function addNewTask() {
    let inputValue = inputElement.value

    if (inputValue === "") {
        alert("Please enter a task description !")
        return
    }

    let newTask = {
        id: Date.now(),
        caption: inputValue,
    }

    tasks.push(newTask)
    inputElement.value = ''
    updateListDom()
}

function removeTask(e) {
    const elementId = e.target.dataset.elementId
    let index = tasks.findIndex(task => task.id === +elementId)
    
    tasks.splice(index, 1)

    updateListDom()
}

inputElement.addEventListener("keydown",(event => {
    if (event.key === "Enter"){
        addNewTask()
    }
}))

addButton.addEventListener("click", addNewTask)

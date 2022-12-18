const input = document.querySelector('.textarea')
const button = document.querySelector('.buttoninput')
const list = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    createTodo()
}

// adding todoList
function createTodo() {
    const itemall = document.createElement('div')
    console.log('itemall');
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = input.value
    itemall.appendChild(item)

    if (input.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    const updatebutton = document.createElement("button")
    updatebutton.innerHTML = '<i class ="fa-solid fa-pen-to-square"></i>'
    updatebutton.classList.add("update-button")
    itemall.appendChild(updatebutton)

    // const updatebutton = document.createElement("button")
    // updatebutton.innerHtml ='<i class ="fa-solid fa-pen-to-square"></i>'
    // updatebutton.classList.add("update-button")
    // itemall.appendChild(updatebutton)

    list.appendChild(itemall)
    input.value = ''
}

// checking and delete todoList 
function checkDelete(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }

    if(item.classList[0]==='update-Button') {
        todoList = item.parentElement.previousElementSibling.innerHTML;
        todolist.remove()
      }
}

// update the todo list

// function updateTodoList(e){
//     const item = e.target

//     //update
//     // if(item.classList[0]==='update-Button') {
//     //   todoList = item.parentElement
//     //   todolist.update()
//     // }
// }

button.addEventListener('click', clickButton)
list.addEventListener('click', checkDelete)

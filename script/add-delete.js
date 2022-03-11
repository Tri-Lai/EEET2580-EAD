function addTask(container) {

    let flag = false, taskTitle;
    const draggable = document.createElement('div')

    // Access parent element from the current button element
    let selector = container.parentNode.parentNode.parentNode.className
    
    // Replace all white space with dot
    selector = selector.replace(/ /g, '.')

    // Add dot before the selector
    selector = '.'+selector

    // E.g: document.querySelector(.parent.child)

    const list = document.querySelector(selector)

    if (list === null)
        console.log("list is null")

    do {
        taskTitle = window.prompt("Create task: ")
        // Click 'Cancel button'
        if (taskTitle === null) return

        if (taskTitle.length === 0) {
            window.alert('Please provide title for new task')
        } else
            flag = true
    } while (!flag)  
    
    draggable.innerText = taskTitle
    draggable.setAttribute('class', 'draggable')

    list.appendChild(draggable)
    console.log("Create task \"" + taskTitle + "\" successfully!")
}

function deleteTask(container) {
    // Access parent element from the current button element
    let selector = container.parentNode.parentNode.parentNode.className
        
    // Replace all white space with dot
    selector = selector.replace(/ /g, '.')

    // Add dot before the selector
    selector = '.'+selector

    // E.g: document.querySelector(.parent.child)

    const list = document.querySelector(selector)    
    
    let taskTitle = window.prompt("Delete task: ")

    try {
        for (const draggable of document.querySelectorAll(".draggable")) {
            if (draggable.textContent.includes(taskTitle)) {
                console.log("Delete task \"" + taskTitle + "\" successfully!")
                list.removeChild(draggable)
            }
        }
    } catch (error) {
        alert("Task \"" + taskTitle + "\" not found in this list!")
    }
}
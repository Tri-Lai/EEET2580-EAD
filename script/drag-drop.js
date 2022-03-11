let draggables = document.querySelectorAll('.draggable')
let lists = document.querySelectorAll('.list');


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove("dragging")
    })
})

lists.forEach(list => {
    list.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getElementAfter(list, e.clientY)
        const draggingElement = document.querySelector('.dragging')

        if (afterElement == null) {
            list.appendChild(draggingElement)
        } else {
            list.insertBefore(draggingElement, afterElement)
        }
    })
})


function getElementAfter(container, y) {
    const draggableList = [...container.querySelectorAll('.draggable:not(.dragging)')]
    return draggableList.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element
}
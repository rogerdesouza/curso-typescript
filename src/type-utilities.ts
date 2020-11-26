type ToDo = {
    title: string
    description: string
    completed: boolean
}

const todo: Readonly<ToDo> = {
    title: "Assistir Dark de novo",
    description: "Relembrar detalhes",
    completed: false
}

console.log(todo)

function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>) { // esse partial permite que não tenha todos os campos do ToDo
    return { ...todo, ...fieldsToUpdate } // ... é o spread opperator
}

const todo2: ToDo = updateToDo(todo, { completed: true })

console.log(todo2)

// pick

type ToDoPreview = Pick<ToDo, "title" | "completed">

const todo3: ToDoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}

// omit

type ToDoPreview2 = Omit<ToDo, "description">
const todo4: ToDoPreview2 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}
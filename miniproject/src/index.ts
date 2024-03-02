const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("input-todo") as HTMLInputElement;
const form = document.querySelector("form")!; // typescript knows that this will be HTMLFormElement
const todoList = document.getElementById("list-todo") as HTMLUListElement;

interface Todo {
    item: string;
    completed: boolean;
}

const todos: Todo[] = loadTodos();
todos.forEach(addTodoElement);

function loadTodos() {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const todo = {
        item: input.value,
        completed: false,
    };

    addTodoElement(todo);
    todos.push(todo);

    saveTodos();
    input.value = "";
}

function addTodoElement(todo: Todo) {
    const span = document.createElement("span");
    span.innerText = todo.item;
    const newLi = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", function () {
        todo.completed = checkBox.checked;
        saveTodos();
    });

    newLi.append(checkBox);
    newLi.append(span);

    todoList.appendChild(newLi);
}

form.addEventListener("submit", handleSubmit);

// TYPE ASSERTIONS
const myPic = document.querySelector("profile-image") as HTMLImageElement;

let myStery: unknown = "Hello World";
console.log((myStery as string).length);

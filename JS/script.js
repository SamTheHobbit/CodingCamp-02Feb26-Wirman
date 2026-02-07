let todos = [];

function addtodo () {
    const todoinput = document.getElementById("todo-input");
    const tododate = document.getElementById("todo-date");

    if (todoinput.value.trim() === "" || tododate.value === "") {
        alert("Please enter both a todo item and a due date.");
    }

    else {
        const newtodo = {
            todo: todoinput.value,
            date: tododate.value
        };
        todos.push(newtodo);

        todoinput.value = "";
        tododate.value = "";

        rendertodos();
    }

    console.log ('Todo: ', todoinput.value, ' Date: ', tododate.value);
}

function rendertodos () {
    const todolist = document.getElementById("todo-list");

    todolist.innerHTML = "";

    todos.forEach((item, _) => {
        todolist.innerHTML += `
            <li>
                <p class="text-2xl">${item.todo} <span class="text-sm text-gray-500">(${item.date})</span></p>
                <hr />
            </li>`;
    });
}

function deletealltodos () {
    todos = [];
    rendertodos();
}

function filtertodos () {
    const todolist = document.getElementById("todo-list");

    todolist.innerHTML = "";

    if (todoinput.value.trim() === "") {
        alert("Please enter both a todo item and a due date.");
    }
    else {
        const filteredtodos = todos.filter(item => item.todo.includes(todoinput.value));

        filteredtodos.items.forEach((item, _) => {
            todolist.innerHTML += `
                <li>
                    <p class="text-2xl">${item.todo} <span class="text-sm text-gray-500">(${item.date})</span></p>
                    <hr />
                </li>`;
        });
    }
}
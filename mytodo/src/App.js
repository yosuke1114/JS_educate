import { element } from "./view/html-util.js";

export class App  {
//起動
mount() {
        const Form = document.querySelector("#js-form");
        const InputForm = document.querySelector("#js-form-input");
        const TodoListForm = document.querySelector("#js-todo-list");
        const TodoCountForm = document.querySelector("#js-todo-count");
        let todoItemCount = 0;
        Form.addEventListener("submit" , (event) => {
            event.preventDefault();
            console.log(InputForm.value);
            const TodoItemElement = element`<li> ${InputForm.value} </li>`;
            TodoListForm.appendChild(TodoItemElement); 
            todoItemCount += 1;
            TodoCountForm.textContent = `Todoアイテム数: ${todoItemCount}`;
            InputForm.value = "";
        }); 
    }
}

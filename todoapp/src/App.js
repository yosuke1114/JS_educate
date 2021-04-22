import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { element , render} from "./view/html-util.js";



export class App {
    constructor(){
        this.todoListModel = new TodoListModel();
    }
    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");
        // Todoアイテム数
        this.todoListModel.onChange(() => {
            const todoListElement = element`<ul />`;
            const todoItems = this.todoListModel.getTodoItems();
            todoItems.forEach(item => {
                // 完了済みならchecked属性をつけ、未完了ならchecked属性を外す
                // input要素にはcheckboxクラスをつける
                const todoItemElement = item.completed
                    ? element`<li><input type="checkbox" class="checkbox" checked><s>${item.title}</s>
                    <button class="delete">x</button></li>`
                    : element`<li><input type="checkbox" class="checkbox">${item.title}
                    <button class="delete">x</button></li>`;
                    const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
                    inputCheckboxElement.addEventListener("change", () => {
                        // 指定したTodoアイテムの完了状態を反転させる
                        this.todoListModel.updateTodo({
                            id: item.id,
                            completed: !item.completed
                        });
                    });
                    const deleteButtonElement = todoItemElement.querySelector(".delete");
                    deleteButtonElement.addEventListener("click", () => {
                        this.todoListModel.deleteTodo({
                            id: item.id
                        });
                    });
                todoListElement.appendChild(todoItemElement);
            });
            render(todoListElement, containerElement);
            todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
        });
        // 3. フォームを送信したら、新しいTodoItemModelを追加する
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            // 新しいTodoItemをTodoListへ追加する
            this.todoListModel.addTodo(new TodoItemModel({
                title: inputElement.value,
                completed: false
            }));
            inputElement.value = "";
        });
    }
}
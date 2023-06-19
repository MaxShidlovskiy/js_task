// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
class TodoList7 {
    tasks = [`работа`, `поесть`, `покодить`, `поспать`];
    addTask(title) {
        this.tasks.push(title);
        return this.tasks.join(` `);
    }
    removeTask() {
        this.tasks.pop();
        return this.tasks.join(` `);
    }
    getTasks() {
        return this.tasks.join(` `);
    }
}
const todoList7 = new TodoList7();
console.log(todoList7.getTasks());
console.log(todoList7.removeTask());
console.log(todoList7.addTask(`погулять`));
console.log(todoList7.getTasks());

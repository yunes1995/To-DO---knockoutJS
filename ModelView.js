"use strict"

function Task(data) {
    this.name = ko.observable(data.name);
    this.isDone = ko.observable(data.isDone);
}

function appViewModel() {
    const self = this;
    this.editing = ko.observable(false);
    this.edit = function() { 
        self.editing(true);
    }
    
    self.getFocus = ko.observable(false);
    
    self.todos = ko.observableArray([]);

    self.addTodo = function() {
        self.todos.push(new Task({ name: "" }));
    }

    self.removeTodo = function(todo) { self.todos.remove(todo); }
}

ko.applyBindings(new appViewModel());

// menunar 
const allTodo = document.querySelector(".all-todos");
allTodo.addEventListener("click", () => {
    const items = document.querySelectorAll(".task, .done-remove");
    items.forEach(todo => {
        if(todo.classList.contains("task")){
            todo.style.display = "block";
        }
        if(todo.classList.contains("done-remove")){
            todo.style.display = "flex";
        }
    })
});

const doneTodo = document.querySelector(".done-todos");
doneTodo.addEventListener("click", () => {
    const items = document.querySelectorAll(".task, .done-remove");
    items.forEach(todo => {
        todo.style.display = "none";
        if(todo.classList.contains("true")) {
            if(todo.classList.contains("task")){
                todo.style.display = "block";
            }
            if(todo.classList.contains("done-remove")){
                todo.style.display = "flex";
            }
        }
    })
});

const undoneTodo = document.querySelector(".undone-todos");
undoneTodo.addEventListener("click", () => {
    const items = document.querySelectorAll(".task, .done-remove");
    items.forEach(todo => {
        if(todo.classList.contains("task")){
            todo.style.display = "block";
        }
        if(todo.classList.contains("done-remove")){
            todo.style.display = "flex";
        }
        if(todo.classList.contains("true")) {
            todo.style.display = "none"
        }
    })
});

 
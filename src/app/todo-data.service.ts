import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable()
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];
  constructor() { }

  /** Simulate POST /todos */
  addTodo(todo: Todo): TodoDataService {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  
  /** Simulate DELETE /todos/:id */
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this;
  }
  /** Simulate GET /todos */
  getAllTodos(): Todo[] {
    return this.todos;
  }

  /** Simulate GET /todos/:id */
  getTodoById(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }
  
  /** Simulate PUT /todos/:id */
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if(!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  
  /** Toggle todo complete */
  toggleTodoComplete(todo: Todo): Todo {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return todo;
  }

}

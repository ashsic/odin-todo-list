// Project.js

import Todo from './Todo.js';

class Project {
  static projects = [];

  static counter = 0;

  constructor(name = 'New Project') {
    this._name = name;
    this._tasks = [];
    Project.projects.push(this);
    this._id = ++Project.counter;
  }

  static get Projects() {
    return Project.projects;
  }

  static deleteProject(id) {
    Project.projects = Project.projects.filter((project) => project._id != id);
  }

  static deleteTodo(id) {
    Todo.tasks = Todo.tasks.filter((task) => task._id != id);
    Project.projects.forEach((project) => {
      project._tasks = project._tasks.filter((task) => task._id != id);
    });
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get tasks() {
    return this._tasks;
  }

  addTask(task) {
    this._tasks.push(task);
  }

  removeTask(id) {
    this._tasks = this._tasks.filter((task) => task._id != id);
  }
}

export default Project;

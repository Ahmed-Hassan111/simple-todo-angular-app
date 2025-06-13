import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  //standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: string[] = [];
  newtask: string = '';

  addTask() {
    if (!this.newtask.trim()) {
      return; // Do nothing if input is empty or whitespace
    }
    this.tasks.push(this.newtask);
    this.newtask = '';
  }
  removetask(index: number) {
    this.tasks.splice(index, 1);
  }
  clearTasks() {
    this.tasks = [];
  }
}

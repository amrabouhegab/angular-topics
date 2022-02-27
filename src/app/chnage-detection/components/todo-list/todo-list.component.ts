import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list = [
    {name: 'Todo1', id: 1},
    {name: 'Todo2', id: 2},
    {name: 'Todo3', id: 3},
  ];
  constructor() { }

  ngOnInit(): void {}

  onAddItem(): void {
    const ids = this.list.map(val => val.id);
    const maxId = Math.max(...ids);
    const id = maxId + 1;
    this.list.push({
      id,
      name: 'TODO' + id
    });
  }

}

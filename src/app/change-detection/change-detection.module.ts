import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [TodoComponent, TodoListComponent]
})
export class ChangeDetectionModule { }

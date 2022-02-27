import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentsRoutingModule } from './dynamic-components-routing.module';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';


@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    DynamicComponentsRoutingModule
  ]
})
export class DynamicComponentsModule { }

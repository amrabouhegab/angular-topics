import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule)
  },
  {
    path: 'dynamic-components',
    loadChildren: () => import('./dynamic-components/dynamic-components.module').then(m => m.DynamicComponentsModule)
  },
  {
    path: 'ngrx',
    loadChildren: () => import('./ng-rx/ng-rx.module').then(m => m.NgRxModule)
  },
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

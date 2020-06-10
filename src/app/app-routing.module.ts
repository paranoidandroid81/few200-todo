import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { CounterComponent } from './components/counter/counter.component';
import { MusicComponent } from './features/music/music.component';


const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'todo',
    component: TodoContainerComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

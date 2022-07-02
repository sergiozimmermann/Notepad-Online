import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarNotaComponent } from './notepad/criar-nota/criar-nota.component';
import { NotepadComponent } from './notepad/notepad.component';

const routes: Routes = [
  { path: '', redirectTo: 'notepad', pathMatch: 'full' },
  { path: 'notepad', component: NotepadComponent },
  { path: 'criar-nota', component: CriarNotaComponent },
  // { path: '/editar-nota/:id', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

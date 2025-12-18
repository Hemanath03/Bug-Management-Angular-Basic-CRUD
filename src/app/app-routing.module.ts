import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugsListComponent } from './components/bugs-list/bugs-list.component';
import { AddBugComponent } from './components/add-add/add-bug.component';

const routes: Routes = [
  { path: '', redirectTo: 'bugs', pathMatch: 'full' },
  { path: 'bugs', component: BugsListComponent },
  { path: 'bugs/add', component: AddBugComponent },
  { path: 'bugs/edit/:id', component: AddBugComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

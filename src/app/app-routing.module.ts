import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleEntryComponent } from './pages/blog/single-entry/single-entry.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'single', component: SingleEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

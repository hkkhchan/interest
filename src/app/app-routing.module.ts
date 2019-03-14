import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestPage } from './page/interest.page';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: InterestPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

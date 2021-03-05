import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FflComponent} from './ffl/ffl.component';
import {SolacemindComponent} from './solacemind/solacemind.component'
const routes: Routes = [
  {path: '', component: SolacemindComponent},
  {path:'ffl', component: FflComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

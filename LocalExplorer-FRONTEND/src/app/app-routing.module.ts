import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PropositionComponent } from './proposition/proposition.component';

const routes: Routes = [
  {path: 'user',component:UserComponent},
  {path: '',redirectTo:'user',pathMatch:'full'},
  {path:'propositions/:id',component:PropositionComponent},
  //{path:'propositions',component:PropositionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUserComponent } from './update-user/update-user.component';
import { from } from 'rxjs';

const routes: Routes = [
{
  path: '',
  component: UpdateUserComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateUserRoutingModule { }

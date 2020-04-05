import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupLoginPage } from './signup-login.page';

const routes: Routes = [
  {
    path: '',
    component: SignupLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupLoginPageRoutingModule {}

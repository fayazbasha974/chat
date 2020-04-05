import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupLoginPageRoutingModule } from './signup-login-routing.module';

import { SignupLoginPage } from './signup-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignupLoginPage]
})
export class SignupLoginPageModule {}

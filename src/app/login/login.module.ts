import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RobotExpressiveModule } from './components/vinyle/vinyle.component';
import { LoginPage } from './login.page';

import { HomePageRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    RobotExpressiveModule,
  ],
  declarations: [LoginPage],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationLevel1Page } from './registration-level1.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationLevel1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationLevel1Page]
})
export class RegistrationLevel1PageModule {}

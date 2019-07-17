import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationLevel2Page } from './registration-level2.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationLevel2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationLevel2Page]
})
export class RegistrationLevel2PageModule {}

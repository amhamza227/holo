import { AgmCoreModule } from '@agm/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationLevel4Page } from './registration-level4.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationLevel4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1Et1ylqbi6j8VpP6MQxmWp3PPZ_LAGkY'
    })
  ],
  declarations: [RegistrationLevel4Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrationLevel4PageModule {}

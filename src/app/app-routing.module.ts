import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registration-level1', loadChildren: './registration-level1/registration-level1.module#RegistrationLevel1PageModule' },
  { path: 'registration-level2', loadChildren: './registration-level2/registration-level2.module#RegistrationLevel2PageModule' },
  { path: 'registration-level3', loadChildren: './registration-level3/registration-level3.module#RegistrationLevel3PageModule' },
  { path: 'registration-level4', loadChildren: './registration-level4/registration-level4.module#RegistrationLevel4PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

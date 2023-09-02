import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordPage } from './forgot-password.page'; // Asegúrate de importar el componente correcto

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPage, // Cambia 'RegisterPage' a 'ForgotPasswordPage'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinPasswordComponent } from './pin-password/pin-password.component';

const routes: Routes = [
  { path: '', component: PinPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

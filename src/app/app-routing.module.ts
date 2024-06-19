import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { RegisteredComponent } from './registered/registered.component';
import { FooterComponent } from './footer/footer.component';
import { VerifyChannelComponent } from './verify-channel/verify-channel.component';
import { AllowAccessAppComponent } from './allow-access-app/allow-access-app.component';
import { ConsentPDPAComponent } from './consent-pdpa/consent-pdpa.component';
import { DetailsPdpaComponent } from './details-pdpa/details-pdpa.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyotpComponent},
  { path: 'registered' , component: RegisteredComponent},
  { path: 'footer' , component: FooterComponent},
  { path: 'verify-channel', component: VerifyChannelComponent},
  { path: 'access-app', component: AllowAccessAppComponent},
  { path: 'pdpa', component: ConsentPDPAComponent},
  { path: 'pdpa-details', component: DetailsPdpaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

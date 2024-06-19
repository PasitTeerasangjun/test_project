import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { RegisteredComponent } from './registered/registered.component';
import { FooterComponent } from './footer/footer.component';
import { VerifyChannelComponent } from './verify-channel/verify-channel.component';
import { AllowAccessAppComponent } from './allow-access-app/allow-access-app.component';
import { ConsentPDPAComponent } from './consent-pdpa/consent-pdpa.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DetailsPdpaComponent } from './details-pdpa/details-pdpa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DialogComponent,
    RegisteredComponent,
    FooterComponent,
    VerifyChannelComponent,
    AllowAccessAppComponent,
    ConsentPDPAComponent,
    DetailsPdpaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

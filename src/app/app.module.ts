import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Modules from Material-ui
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { MatButtonModule } from '@angular/material/button';
import { PagePhonesComponent } from './components/page-phones/page-phones.component';
import { MatMenuModule } from '@angular/material/menu';
import { PhoneComponent } from './components/page-phones/phone/phone.component';
import { MatCardModule } from '@angular/material/card';
import { PhoneCartIconComponent } from './components/page-phones/phone-cart-icon/phone-cart-icon.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { PhoneCartComponent } from './components/page-phones/phone-cart/phone-cart.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    PagePhonesComponent,
    PhoneComponent,
    PhoneCartIconComponent,
    PhoneCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ConfirmationService, MessageService} from "primeng/api";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './components/layout/layout.component';
import {LoginComponent} from './components/login/login.component';
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {ToggleButtonModule} from "primeng/togglebutton";
import {Button} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ToastModule} from "primeng/toast";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    PasswordModule,
    ToggleButtonModule,
    Button,
    InputTextModule,
    NgOptimizedImage,
    OverlayPanelModule,
    ToastModule
  ],
    providers: [MessageService, ConfirmationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

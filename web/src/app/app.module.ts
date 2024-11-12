import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

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

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CardModule,
        FormsModule,
        PasswordModule,
        ToggleButtonModule,
        Button,
        InputTextModule,
        NgOptimizedImage
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

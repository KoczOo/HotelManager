import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ConfirmationService, MessageService} from "primeng/api";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './components/layout/layout.component';
import {LoginComponent} from './components/login/login.component';
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {ToggleButtonModule} from "primeng/togglebutton";
import {Button} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from './components/shared/header/header.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ToastModule} from "primeng/toast";
import {RoomsComponent} from './components/rooms/rooms.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import { BookingModalComponent } from './components/rooms/booking-modal/booking-modal.component';
import {DialogService} from "primeng/dynamicdialog";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        RoomsComponent,
        BookingModalComponent
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
        ToastModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        CalendarModule,
        TableModule
    ],
    providers: [DialogService, MessageService, ConfirmationService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},],
    bootstrap: [AppComponent]
})
export class AppModule {
}

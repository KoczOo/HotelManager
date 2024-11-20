import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {authenticationGuard} from "./guards/authentication-guard.guard";
import {RoomsComponent} from "./components/rooms/rooms.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    component: LayoutComponent,
    canActivate: [authenticationGuard],
    children: [
      {
        path: "**",
        component: RoomsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

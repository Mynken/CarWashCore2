import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { CarCreateComponent } from './components/controls/car-create/car-create.component';
import { CarEditComponent } from './components/controls/car-edit/car-edit.component';
import { CarRezerwationComponent } from './components/controls/car-rezerwation/car-rezerwation.component';
import { CarWaitComponent } from './components/controls/car-wait/car-wait.component';
import { CarInworkComponent } from './components/controls/car-inwork/car-inwork.component';
import { CarLastEditComponent } from './components/controls/car-lastEdit/car-lastEdit.component';
import { CarFinishComponent } from './components/controls/car-finish/car-finish.component';
import { UserManageCarComponent } from './components/controls/user-manage-car/user-manage-car.component';

 @NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: HomeComponent, canActivate: [AuthGuard], data: { title: "Home" } },
            { path: "login", component: LoginComponent, data: { title: "Login" } },
            { path: "settings", component: SettingsComponent, canActivate: [AuthGuard], data: { title: "Settings" } },
            { path: "about", component: AboutComponent, data: { title: "About Us" } },
            { path: 'car-create', component: CarCreateComponent, canActivate: [AuthGuard], data: { title: 'CreateCar' } },
            { path: 'car-edit/:id', component: CarEditComponent, canActivate: [AuthGuard], data: { title: 'EditCar' } },
            { path: 'car-lastedit/:id', component: CarLastEditComponent, canActivate: [AuthGuard], data: { title: 'EditCar' } },
            { path: 'car-rezerwation', component: CarRezerwationComponent, canActivate: [AuthGuard], data: { title: 'Rezerwation' } },
            { path: 'inwait', component: CarWaitComponent, canActivate: [AuthGuard], data: { title: 'Wait' } },
            { path: 'inwork', component: CarInworkComponent, canActivate: [AuthGuard], data: { title: 'Work' } },
            { path: 'finished', component: CarFinishComponent, canActivate: [AuthGuard], data: { title: 'Work' } },
            { path: 'user-manage-car', component: UserManageCarComponent, canActivate: [AuthGuard], data: { title: 'ManageCars' } },
            { path: "home", redirectTo: "/", pathMatch: "full" },
            { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } },
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService, AuthGuard
    ]
})
export class AppRoutingModule { }

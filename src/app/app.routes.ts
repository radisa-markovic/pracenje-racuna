import { Routes } from '@angular/router';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { SingleUserComponent } from './admin/single-user/single-user.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "admin"
    },
    {
        path: "admin",
        component: LandingPageComponent,
        children: [
            {
                path: "newUser",
                component: CreateUserComponent,
            },
            {
                path: "users",
                component: UserListComponent
            },
            {
                path: "users/:id",
                component: SingleUserComponent
            }
        ]
    },
];

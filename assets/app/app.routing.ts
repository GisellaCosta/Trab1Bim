import { Routes, RouterModule } from "@angular/router";
import { AppMessage } from "./components/app-message/app-message.component";
import { AuthenticationComponent } from "./../../auth/authentication.component";
import { AppComponent } from "./app.component";
import { SendMessage } from "./components/send-message/send-message.component";
import { SigninComponent } from "./components/signin/signin.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'node', pathMatch: 'full' },
    { path: 'node', component: AppComponent },
    { path: 'sendmessage', component: SendMessage },
    { path: 'signin', component: SigninComponent },
];
export const myrouting = RouterModule.forRoot(APP_ROUTES);



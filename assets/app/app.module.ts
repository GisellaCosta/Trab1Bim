import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { AppMessage } from './components/app-message/app-message.component';
import { TextSizeComponent } from './components/textsize/textsize.component';
import { EmployeeCaseComponent } from './components/employee/employee-case.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SendMessage } from './components/send-message/send-message.component';
import { SigninComponent } from './components/signin/signin.component';
import { Router, RouterModule } from '@angular/router';
import { myrouting } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        TextSizeComponent,
        EmployeeCaseComponent,
        AppMessage,
        MessageInputComponent,
        SignupComponent,
        SendMessage,
        SigninComponent,
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, myrouting],
    bootstrap: [AppComponent, AppMessage, SendMessage, SigninComponent,],

})
export class AppModule {

}
import { ChangeDetectorRef, Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Login } from "../../models/login.model";
import { SignInService } from "./signin.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    providers: [SignInService]
})
export class SigninComponent {
    myForm: FormGroup;
    lembrarUsuario: boolean = false;

    constructor(private service: SignInService) { 
        if(localStorage.getItem("lembrarUsuario")) {
            this.lembrarUsuario = localStorage.getItem('lembrarUsuario') == "true"
        }
    }

    onSubmit() {
        var email = this.myForm.controls['emailTS'].value
        var password = this.myForm.controls['passwordTS'].value 
        this.service.login(email,
            password).subscribe(res => {
                if (res.error) {
                    alert(res.error);
                    return;
                }
                if(this.lembrarUsuario) {
                    localStorage.setItem('user', email);
                    localStorage.setItem('password', password);       
                } else {
                    localStorage.removeItem('user');
                    localStorage.removeItem('password');
                }
                this.service.token = res.token;
                localStorage.setItem('token', res.token);
                localStorage.setItem('userId', res.userId);
                localStorage.setItem('userEmail', res.userEmail);
            });
    }

    updateLembrarUsuario() {
        localStorage.setItem('lembrarUsuario', String(!this.lembrarUsuario));
    }

    ngOnInit() {
        var userTS = null;
        var passwordTS = null;
        if(localStorage.getItem('user')) {
            userTS =  localStorage.getItem('user');
        }
        if(localStorage.getItem('password')) {
            passwordTS =  localStorage.getItem('password');
        }
        this.myForm = new FormGroup({
            emailTS: new FormControl(userTS, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(passwordTS, Validators.required)
        });
    }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, Form } from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{
    myForm: FormGroup;
    ngOnInit(){
      this.myForm = new FormGroup ({
        firstNameTS: new FormControl(null, Validators.required),
        lastNameTS: new FormControl(null, Validators.required),
        emaiTS: new FormControl(null,[
            Validators.required,
            Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
        ]),
            passwordsTS: new FormControl(null, Validators.required)
     } );
    }

    onSubmit() {
        
        this.myForm.reset();
    }
}

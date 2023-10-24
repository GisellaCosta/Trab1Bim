import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Message } from "../../models/message.model";
import { MessageService } from "../app-message/app-message.service";

@Component({
    selector: 'message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent {

    constructor(private messageService: MessageService){}
    onSubmit(form: NgForm){
        const messageAux = new Message("1", form.value.myContentNgForm, 'Vini', 'Vini', 'Vini');
        this.messageService.addMessage(messageAux);
        console.log(form);
        form.resetForm();
    }
}
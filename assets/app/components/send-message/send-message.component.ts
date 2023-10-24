import { Component, Input, } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../app-message/app-message.service';

@Component({
    selector: 'send-message',
    templateUrl: './send-message.component.html',
    providers: [MessageService],
    styles: [
        `.autor {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .no-extras {
            border: 0 !important;
            box-shadow: none !important;
            background-color: transparent !important;
            cursor: default !important;
        }
        .config{
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
        `
    ]
})
export class SendMessage {

    private msgContent: string;

    constructor(private msgService: MessageService) { }

    sendMessage() {
        if(this.msgContent == "") {
            return;
        }
        var message = new Message(null, this.msgContent, localStorage.getItem('userId'),
            localStorage.getItem('userEmail'));
        this.msgService.addMessage(message);
        this.msgContent = "";
    }

}
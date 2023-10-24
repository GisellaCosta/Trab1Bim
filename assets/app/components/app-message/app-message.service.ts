import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Message } from "../../models/message.model";
import { environment } from '../../environments/environment';

@Injectable()
export class MessageService {

    constructor(private http: HttpClient) { }

    addMessage(message: Message) {
        const httpHeaders = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        return this.http.post(environment.API_URL + "/message", message, {headers: httpHeaders});
    }

    getMessages() {
        return this.http.get<Message[]>(environment.API_URL + "/messages");
    }

    deleteMessage(id: string) {
        return this.http.delete(environment.API_URL + "/message/" + id);
    }
    editarMessage(id: string, message: Message) {
        return this.http.put(environment.API_URL + `/message/${id}`, {message});
    }
}  

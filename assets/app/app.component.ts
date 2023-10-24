import { Component, Output } from "@angular/core";
import { MessageService } from "./components/app-message/app-message.service";
import { SignInService } from "./components/signin/signin.service";
import { Message } from "./models/message.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  providers: [MessageService, SignInService],
})
export class AppComponent {
  messages: Message[] = [];
  token?: string;

  constructor(
    private msgService: MessageService,
    private signService: SignInService
  ) {
    this.loadMessages();
    this.clearStorage();

    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
    this.loadMessages();
  }

  clearStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
  }

  loadMessages() {
    this.msgService.getMessages().subscribe((e) => {
      this.messages = e.reverse();
    });
  }

  logout() {
    this.token = null;
    this.clearStorage();
  }

  textSize = 12;
}

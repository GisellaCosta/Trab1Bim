import { Component, Input } from "@angular/core";
import { Message } from "../../models/message.model";
import { MessageService } from "./app-message.service";

@Component({
  selector: "app-message",
  templateUrl: "./app-message.component.html",
  providers: [MessageService],
  styles: [
    `
      .autor {
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
      .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
      }
    `,
  ],
})
export class AppMessage {
  @Input() messageVarClasse: Message;

  color = "yellow";
  podeEditar: boolean = false;
  constructor(private msgService: MessageService) {}

  onMudaStyle() {
    this.color = "red";
  }

  onDelete() {
    this.msgService.deleteMessage(this.messageVarClasse._id);
  }

  onEditar(message: string): void {
    this.messageVarClasse.content = message;
    this.msgService.editarMessage(
      this.messageVarClasse._id,
      this.messageVarClasse
    );
  }

  ativarEditar() {
    this.podeEditar = true;
  }
}

import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'case-app',
    templateUrl: './employee-case.component.html'
})
export class EmployeeCaseComponent {
    @Input() myName: string;
    @Output() myNameChange = new EventEmitter<string>();

    changeCase(val: string) {
        if(val == 'upper') {
            this.myName = this.myName.toUpperCase();
        } else {
            this.myName = this.myName.toLocaleLowerCase();
        }
        this.myNameChange.emit(this.myName);
    }
}

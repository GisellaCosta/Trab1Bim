import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'size-app',
    templateUrl: './textsize.component.html'
})
export class TextSizeComponent {
    
    @Input('cdTextSizeAlias') cdTextSize: number;
    @Output('cdTextSizeAliasChange') objCdTextSize = new EventEmitter<number>();

    plus() {
        this.cdTextSize = this.cdTextSize + 1;
        this.emitSize();
    }

    minus() {
        this.cdTextSize = this.cdTextSize - 1;
        this.emitSize();
    }

    emitSize() {
        this.objCdTextSize.emit(this.cdTextSize);
    }

}
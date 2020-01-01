import { Component, Input, OnInit } from "@angular/core";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "ngx-swagger-ui",
    templateUrl: "./swagger-ui.component.html",
    styleUrls: ["./swagger-ui.component.css"]
})
export class SwaggerUiComponent implements OnInit {

    @Input()
    public url: string;

    constructor() {
    }

    ngOnInit() {
    }

}

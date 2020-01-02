import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { SwaggerConfigs, SwaggerUIBundle, Url } from "swagger-ui-dist";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "ngx-swagger-ui",
    templateUrl: "./swagger-ui.component.html",
    styleUrls: ["./swagger-ui.component.scss"]
})
export class SwaggerUiComponent implements OnInit, AfterViewInit {

    @Input()
    public url = "";

    @Input()
    public urls: Url[];

    @ViewChild("swaggerUI", {static: true})
    private swaggerUiContainer: ElementRef<HTMLDivElement>;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        const config: SwaggerConfigs = {
            url: this.url,
            domNode: this.swaggerUiContainer.nativeElement,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIBundle.SwaggerUIStandalonePreset
            ]
        };

        if (this.urls && this.urls.length > 0) {
            config.urls = this.urls;
        }

        SwaggerUIBundle(config);
    }

}

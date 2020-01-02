import { NgModule } from "@angular/core";
import { SwaggerUiComponent } from "./swagger-ui/swagger-ui.component";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [SwaggerUiComponent],
    imports: [
        HttpClientModule
    ],
    exports: [SwaggerUiComponent]
})
export class NgxSwaggerModule {
}

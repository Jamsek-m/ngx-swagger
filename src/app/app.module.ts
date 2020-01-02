import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxSwaggerModule } from "../../projects/ngx-swagger/src/lib/ngx-swagger.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxSwaggerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

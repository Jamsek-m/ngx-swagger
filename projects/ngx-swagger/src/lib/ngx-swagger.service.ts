import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class SwaggerService {

    private static SWAGGER_CACHE: any = null;

    constructor(private http: HttpClient) {
    }

    public getSwagger(url: string): Observable<any> {
        if (SwaggerService.SWAGGER_CACHE === null) {
            return this.http.get(url).pipe(
                tap((swagger: any) => {
                    SwaggerService.SWAGGER_CACHE = swagger;
                })
            );
        } else {
            return of(SwaggerService.SWAGGER_CACHE);
        }
    }
}

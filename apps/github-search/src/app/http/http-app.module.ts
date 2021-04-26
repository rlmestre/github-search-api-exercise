import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AcceptHeaderInterceptor} from "./accept-header.interceptor";
import {ErrorHandlingInterceptor} from "./error-handling.interceptor";

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AcceptHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true },
  ]
})
export class HttpAppModule { }

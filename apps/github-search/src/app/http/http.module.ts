import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AcceptHeaderInterceptor} from "./accept-header.interceptor";

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AcceptHeaderInterceptor, multi: true }
  ]
})
export class HttpModule { }

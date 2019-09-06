import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let httpReq: HttpRequest<any> = req;

        console.log("##################");
        

        const token = this.authService.getAuthorizationToken();
        if(token) {
            httpReq = req.clone( {headers: req.headers.set('X-Access-Token', token)});
        }
        return next.handle(httpReq);
    }
    
}
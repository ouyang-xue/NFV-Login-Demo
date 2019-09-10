import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let httpReq: HttpRequest<any> = req;

        const token = this.authService.getAuthorizationToken();
        console.log(`##################  GlobalInterceptor : ${token}`);

        if(token) {
            httpReq = req.clone( {headers: req.headers.set('Authorization', token)});
        }
        return next.handle(httpReq).pipe(
            catchError((err, caught) => {
                console.log(err);
                return this.handleAuthError(err);
            })
        ) as any;
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        // handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) { // 401: Unauthorized; 403: Forbiden
            // navigate /delete cookies or whatever
            this.authService.removeAuthorizationToken();
            this.router.navigateByUrl(`/login`);
            // if you've caught / handled the error, you don't want to rethrow it 
            // unless you also want downstream consumers to have to handle it as well.
            return of(err.message);
        }
        return Observable.throw(err);
    }
    
}
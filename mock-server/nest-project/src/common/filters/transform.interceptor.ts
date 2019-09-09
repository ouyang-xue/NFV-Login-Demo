import {
    Injectable,
    NestInterceptor,
    CallHandler,
    ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface Response<T> {
    data: T;
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
      return next.handle().pipe(map(
          data =>  {
            return {
                data
                // data:data,
                // statusCode: 200,
                // message: '请求成功',
            };
         }));
    }
  }


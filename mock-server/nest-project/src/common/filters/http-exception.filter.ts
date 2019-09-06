import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import {ApiException} from '../exception/ApiException'
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const message = exception.message.message;
    if (exception instanceof ApiException) {
      console.log(exception);
      response
        .status(status)
        .json({
          data: {
            error: exception.getErrorMessage(),
          }, // 获取全部的错误信息
          message: '请求失败',
          statusCode: exception.getErrorCode(),
          date: new Date().toLocaleDateString(),
          path: request.url,
        })

    } else {
      console.log(exception);
      response
        .status(status)
        .json({
          data: {
            error: message,
          }, // 获取全部的错误信息
          message: '请求失败',
          statusCode: status,
          date: new Date().toLocaleDateString(),
          path: request.url,
        })
    }
  }

}
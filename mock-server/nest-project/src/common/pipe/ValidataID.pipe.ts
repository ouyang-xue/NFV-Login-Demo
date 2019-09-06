import { Injectable } from '@nestjs/common';
import { PipeTransform,  ArgumentMetadata, HttpStatus, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateIDPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
      console.log(value)
    if (value.length) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
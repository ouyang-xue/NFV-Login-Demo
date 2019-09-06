import { Injectable } from '@nestjs/common';
import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import * as _ from 'lodash';
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value, metadata: ArgumentMetadata) {
      const { metatype } = metadata;
      if (!metatype || !this.toValidate(metatype)) {
          return value;
      }
      const object = plainToClass(metatype, value);
      const errors = await validate(object);
      if (errors.length > 0) {
        // console.log(errors)
        // // errors[0].constraints
        //   throw new BadRequestException(errors);
        const errorMessage = errors.map(item => {
          return {
            currentValue: item.value,
            [item.property]: _.values(item.constraints)[0],
          };
        });
        throw new BadRequestException(errorMessage);
      }
      return value;
    }

    private toValidate(metatype): boolean {
      const types = [String, Boolean, Number, Array, Object];
      return !types.find((type) => metatype === type);
    }
}
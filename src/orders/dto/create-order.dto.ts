import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../entities/order.entity';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto extends PartialType(Order) {
  @ApiProperty()
  memberId: string;

  @ApiProperty()
  qty: number;

  @ApiProperty()
  bookId: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  writer: string;

  @ApiProperty()
  coverImage?: string;

  @ApiProperty()
  point: number;

  @ApiProperty()
  tags: string[];
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  point?: number;
}

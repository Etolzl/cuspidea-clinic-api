import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ExchangeCodeDto {
  @ApiProperty({ example: 'abcdef-code-from-supabase' })
  @IsString()
  @IsNotEmpty()
  code: string;
}

import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class SendInvitationDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

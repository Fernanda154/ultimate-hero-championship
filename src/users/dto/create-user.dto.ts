export class CreateUserDto {
  name: string;
  email: string;
  cpf: string;
  password: string;
  biography?: string;
  photo?: string;
  active: boolean;
}

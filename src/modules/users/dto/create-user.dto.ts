import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    full_name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    confirm_password: string;

    @ApiProperty({ default: false })
    disabled: boolean;

    
}

export class UserLoginDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}

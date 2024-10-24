import { Controller, Post, Body, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateMenegerDto } from '../meneger/dto/create-meneger.dto';
import { SignInDto } from './dto/signin.dto';
import { CreateClientDto } from '../clients/dto/create-client.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() createClientDto:CreateClientDto){
    return this.authService.signUp(createClientDto)
  }
  

  @Post("signin")
  async signIn(@Body() signInDto:SignInDto){
    return this.authService.signIn(signInDto)
  }
}

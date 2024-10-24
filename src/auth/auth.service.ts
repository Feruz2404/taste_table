import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
import { Client } from '../clients/Schemas/client.schema';
import { SignInDto } from './dto/signin.dto';
import { CreateClientDto } from '../clients/dto/create-client.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientsService:ClientsService,
    private readonly jwtService: JwtService    
){}

async signUp(createClientDto:CreateClientDto){
    const candidate =  await this.clientsService.findUserByEmail(
        createClientDto.email
    );

    if(candidate)
        throw new BadRequestException("Client already exists...")
    
    const hashedPassword = await bcrypt.hash(createClientDto.password, 7)

    const newClient = await this.clientsService.create(
        {
            ...createClientDto, password: hashedPassword
        }
    )
    return this.generateToken(newClient)
};

async signIn(signInDto:SignInDto){
    const client = await this.clientsService.findUserByEmail(signInDto.email);

    if(!client)
        throw new UnauthorizedException("Client not found...")

    const validPassword = await bcrypt.compare(signInDto.password,client.password)

    if(!validPassword)
    throw new UnauthorizedException("Client not found...")

    return this.generateToken(client)
}

async generateToken(client:Client){
    const payload = {
        email:client.email,
    }
    return { token: this.jwtService.sign(payload) }
};
}

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SUPABASE_JWT_SECRET || 'your-supabase-jwt-secret-here',
    });
  }

  async validate(payload: any) {
    // Supabase JWT payload includes standard claims
    // { sub: 'uuid-of-user', role: 'authenticated', email: '...', ... }
    
    if (!payload) {
      throw new UnauthorizedException();
    }
    
    // We can return the user payload which will be attached to Request.user
    return {
      userId: payload.sub,
      role: payload.role,
      email: payload.email,
    };
  }
}

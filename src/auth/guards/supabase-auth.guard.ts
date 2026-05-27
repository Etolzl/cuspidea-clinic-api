import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SupabaseService } from '../../supabase/supabase.service';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private readonly supabase: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    
    if (!authHeader) {
      throw new UnauthorizedException('No se proporcionó la cabecera de autorización');
    }

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Formato de token inválido');
    }

    const { data: { user }, error } = await this.supabase.client.auth.getUser(token);
    
    if (error || !user) {
      throw new UnauthorizedException(error?.message || 'Token de autenticación inválido o expirado');
    }

    // Guardamos la información del usuario en el request para que esté disponible en los controladores
    request.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return true;
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private supabase: SupabaseClient;
  private supabaseAdmin: SupabaseClient;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL || 'https://tu-proyecto.supabase.co';
    const supabaseKey = process.env.SUPABASE_ANON_KEY || 'tu-anon-key';
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    this.supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
      },
    });

    if (serviceRoleKey) {
      this.supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      });
    }
  }

  get client() {
    return this.supabase;
  }

  get adminClient() {
    return this.supabaseAdmin || this.supabase;
  }

  async uploadFile(
    bucket: string,
    path: string,
    fileBuffer: Buffer,
    mimetype: string,
  ): Promise<string> {
    const { data, error } = await this.supabase.storage
      .from(bucket)
      .upload(path, fileBuffer, {
        contentType: mimetype,
        upsert: true,
      });

    if (error) {
      this.logger.error(`Error uploading to Supabase Storage: ${error.message}`);
      throw new Error('Failed to upload file to storage');
    }

    const { data: publicUrlData } = this.supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return publicUrlData.publicUrl;
  }
}

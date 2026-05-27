import { SupabaseClient } from '@supabase/supabase-js';
export declare class SupabaseService {
    private readonly logger;
    private supabase;
    private supabaseAdmin;
    constructor();
    get client(): SupabaseClient<any, "public", "public", any, any>;
    get adminClient(): SupabaseClient<any, "public", "public", any, any>;
    uploadFile(bucket: string, path: string, fileBuffer: Buffer, mimetype: string): Promise<string>;
}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.PerfilesScalarFieldEnum = exports.PacientesScalarFieldEnum = exports.Notas_clinicasScalarFieldEnum = exports.Historial_pagosScalarFieldEnum = exports.Documentos_clinicosScalarFieldEnum = exports.CobrosScalarFieldEnum = exports.CitasScalarFieldEnum = exports.Webauthn_credentialsScalarFieldEnum = exports.Webauthn_challengesScalarFieldEnum = exports.UsersScalarFieldEnum = exports.Sso_providersScalarFieldEnum = exports.Sso_domainsScalarFieldEnum = exports.SessionsScalarFieldEnum = exports.Schema_migrationsScalarFieldEnum = exports.Saml_relay_statesScalarFieldEnum = exports.Saml_providersScalarFieldEnum = exports.Refresh_tokensScalarFieldEnum = exports.One_time_tokensScalarFieldEnum = exports.Oauth_consentsScalarFieldEnum = exports.Oauth_clientsScalarFieldEnum = exports.Oauth_client_statesScalarFieldEnum = exports.Oauth_authorizationsScalarFieldEnum = exports.Mfa_factorsScalarFieldEnum = exports.Mfa_challengesScalarFieldEnum = exports.Mfa_amr_claimsScalarFieldEnum = exports.InstancesScalarFieldEnum = exports.IdentitiesScalarFieldEnum = exports.Flow_stateScalarFieldEnum = exports.Custom_oauth_providersScalarFieldEnum = exports.Audit_log_entriesScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    audit_log_entries: 'audit_log_entries',
    custom_oauth_providers: 'custom_oauth_providers',
    flow_state: 'flow_state',
    identities: 'identities',
    instances: 'instances',
    mfa_amr_claims: 'mfa_amr_claims',
    mfa_challenges: 'mfa_challenges',
    mfa_factors: 'mfa_factors',
    oauth_authorizations: 'oauth_authorizations',
    oauth_client_states: 'oauth_client_states',
    oauth_clients: 'oauth_clients',
    oauth_consents: 'oauth_consents',
    one_time_tokens: 'one_time_tokens',
    refresh_tokens: 'refresh_tokens',
    saml_providers: 'saml_providers',
    saml_relay_states: 'saml_relay_states',
    schema_migrations: 'schema_migrations',
    sessions: 'sessions',
    sso_domains: 'sso_domains',
    sso_providers: 'sso_providers',
    users: 'users',
    webauthn_challenges: 'webauthn_challenges',
    webauthn_credentials: 'webauthn_credentials',
    citas: 'citas',
    cobros: 'cobros',
    documentos_clinicos: 'documentos_clinicos',
    historial_pagos: 'historial_pagos',
    notas_clinicas: 'notas_clinicas',
    pacientes: 'pacientes',
    perfiles: 'perfiles'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Audit_log_entriesScalarFieldEnum = {
    instance_id: 'instance_id',
    id: 'id',
    payload: 'payload',
    created_at: 'created_at',
    ip_address: 'ip_address'
};
exports.Custom_oauth_providersScalarFieldEnum = {
    id: 'id',
    provider_type: 'provider_type',
    identifier: 'identifier',
    name: 'name',
    client_id: 'client_id',
    client_secret: 'client_secret',
    acceptable_client_ids: 'acceptable_client_ids',
    scopes: 'scopes',
    pkce_enabled: 'pkce_enabled',
    attribute_mapping: 'attribute_mapping',
    authorization_params: 'authorization_params',
    enabled: 'enabled',
    email_optional: 'email_optional',
    issuer: 'issuer',
    discovery_url: 'discovery_url',
    skip_nonce_check: 'skip_nonce_check',
    cached_discovery: 'cached_discovery',
    discovery_cached_at: 'discovery_cached_at',
    authorization_url: 'authorization_url',
    token_url: 'token_url',
    userinfo_url: 'userinfo_url',
    jwks_uri: 'jwks_uri',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Flow_stateScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    auth_code: 'auth_code',
    code_challenge_method: 'code_challenge_method',
    code_challenge: 'code_challenge',
    provider_type: 'provider_type',
    provider_access_token: 'provider_access_token',
    provider_refresh_token: 'provider_refresh_token',
    created_at: 'created_at',
    updated_at: 'updated_at',
    authentication_method: 'authentication_method',
    auth_code_issued_at: 'auth_code_issued_at',
    invite_token: 'invite_token',
    referrer: 'referrer',
    oauth_client_state_id: 'oauth_client_state_id',
    linking_target_id: 'linking_target_id',
    email_optional: 'email_optional'
};
exports.IdentitiesScalarFieldEnum = {
    provider_id: 'provider_id',
    user_id: 'user_id',
    identity_data: 'identity_data',
    provider: 'provider',
    last_sign_in_at: 'last_sign_in_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    email: 'email',
    id: 'id'
};
exports.InstancesScalarFieldEnum = {
    id: 'id',
    uuid: 'uuid',
    raw_base_config: 'raw_base_config',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Mfa_amr_claimsScalarFieldEnum = {
    session_id: 'session_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    authentication_method: 'authentication_method',
    id: 'id'
};
exports.Mfa_challengesScalarFieldEnum = {
    id: 'id',
    factor_id: 'factor_id',
    created_at: 'created_at',
    verified_at: 'verified_at',
    ip_address: 'ip_address',
    otp_code: 'otp_code',
    web_authn_session_data: 'web_authn_session_data'
};
exports.Mfa_factorsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    friendly_name: 'friendly_name',
    factor_type: 'factor_type',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    secret: 'secret',
    phone: 'phone',
    last_challenged_at: 'last_challenged_at',
    web_authn_credential: 'web_authn_credential',
    web_authn_aaguid: 'web_authn_aaguid',
    last_webauthn_challenge_data: 'last_webauthn_challenge_data'
};
exports.Oauth_authorizationsScalarFieldEnum = {
    id: 'id',
    authorization_id: 'authorization_id',
    client_id: 'client_id',
    user_id: 'user_id',
    redirect_uri: 'redirect_uri',
    scope: 'scope',
    state: 'state',
    resource: 'resource',
    code_challenge: 'code_challenge',
    code_challenge_method: 'code_challenge_method',
    response_type: 'response_type',
    status: 'status',
    authorization_code: 'authorization_code',
    created_at: 'created_at',
    expires_at: 'expires_at',
    approved_at: 'approved_at',
    nonce: 'nonce'
};
exports.Oauth_client_statesScalarFieldEnum = {
    id: 'id',
    provider_type: 'provider_type',
    code_verifier: 'code_verifier',
    created_at: 'created_at'
};
exports.Oauth_clientsScalarFieldEnum = {
    id: 'id',
    client_secret_hash: 'client_secret_hash',
    registration_type: 'registration_type',
    redirect_uris: 'redirect_uris',
    grant_types: 'grant_types',
    client_name: 'client_name',
    client_uri: 'client_uri',
    logo_uri: 'logo_uri',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    client_type: 'client_type',
    token_endpoint_auth_method: 'token_endpoint_auth_method'
};
exports.Oauth_consentsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    client_id: 'client_id',
    scopes: 'scopes',
    granted_at: 'granted_at',
    revoked_at: 'revoked_at'
};
exports.One_time_tokensScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    token_type: 'token_type',
    token_hash: 'token_hash',
    relates_to: 'relates_to',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Refresh_tokensScalarFieldEnum = {
    instance_id: 'instance_id',
    id: 'id',
    token: 'token',
    user_id: 'user_id',
    revoked: 'revoked',
    created_at: 'created_at',
    updated_at: 'updated_at',
    parent: 'parent',
    session_id: 'session_id'
};
exports.Saml_providersScalarFieldEnum = {
    id: 'id',
    sso_provider_id: 'sso_provider_id',
    entity_id: 'entity_id',
    metadata_xml: 'metadata_xml',
    metadata_url: 'metadata_url',
    attribute_mapping: 'attribute_mapping',
    created_at: 'created_at',
    updated_at: 'updated_at',
    name_id_format: 'name_id_format'
};
exports.Saml_relay_statesScalarFieldEnum = {
    id: 'id',
    sso_provider_id: 'sso_provider_id',
    request_id: 'request_id',
    for_email: 'for_email',
    redirect_to: 'redirect_to',
    created_at: 'created_at',
    updated_at: 'updated_at',
    flow_state_id: 'flow_state_id'
};
exports.Schema_migrationsScalarFieldEnum = {
    version: 'version'
};
exports.SessionsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    factor_id: 'factor_id',
    aal: 'aal',
    not_after: 'not_after',
    refreshed_at: 'refreshed_at',
    user_agent: 'user_agent',
    ip: 'ip',
    tag: 'tag',
    oauth_client_id: 'oauth_client_id',
    refresh_token_hmac_key: 'refresh_token_hmac_key',
    refresh_token_counter: 'refresh_token_counter',
    scopes: 'scopes'
};
exports.Sso_domainsScalarFieldEnum = {
    id: 'id',
    sso_provider_id: 'sso_provider_id',
    domain: 'domain',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Sso_providersScalarFieldEnum = {
    id: 'id',
    resource_id: 'resource_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    disabled: 'disabled'
};
exports.UsersScalarFieldEnum = {
    instance_id: 'instance_id',
    id: 'id',
    aud: 'aud',
    role: 'role',
    email: 'email',
    encrypted_password: 'encrypted_password',
    email_confirmed_at: 'email_confirmed_at',
    invited_at: 'invited_at',
    confirmation_token: 'confirmation_token',
    confirmation_sent_at: 'confirmation_sent_at',
    recovery_token: 'recovery_token',
    recovery_sent_at: 'recovery_sent_at',
    email_change_token_new: 'email_change_token_new',
    email_change: 'email_change',
    email_change_sent_at: 'email_change_sent_at',
    last_sign_in_at: 'last_sign_in_at',
    raw_app_meta_data: 'raw_app_meta_data',
    raw_user_meta_data: 'raw_user_meta_data',
    is_super_admin: 'is_super_admin',
    created_at: 'created_at',
    updated_at: 'updated_at',
    phone: 'phone',
    phone_confirmed_at: 'phone_confirmed_at',
    phone_change: 'phone_change',
    phone_change_token: 'phone_change_token',
    phone_change_sent_at: 'phone_change_sent_at',
    confirmed_at: 'confirmed_at',
    email_change_token_current: 'email_change_token_current',
    email_change_confirm_status: 'email_change_confirm_status',
    banned_until: 'banned_until',
    reauthentication_token: 'reauthentication_token',
    reauthentication_sent_at: 'reauthentication_sent_at',
    is_sso_user: 'is_sso_user',
    deleted_at: 'deleted_at',
    is_anonymous: 'is_anonymous'
};
exports.Webauthn_challengesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    challenge_type: 'challenge_type',
    session_data: 'session_data',
    created_at: 'created_at',
    expires_at: 'expires_at'
};
exports.Webauthn_credentialsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    credential_id: 'credential_id',
    public_key: 'public_key',
    attestation_type: 'attestation_type',
    aaguid: 'aaguid',
    sign_count: 'sign_count',
    transports: 'transports',
    backup_eligible: 'backup_eligible',
    backed_up: 'backed_up',
    friendly_name: 'friendly_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_used_at: 'last_used_at'
};
exports.CitasScalarFieldEnum = {
    id: 'id',
    paciente_id: 'paciente_id',
    dentista_id: 'dentista_id',
    fecha_hora_inicio: 'fecha_hora_inicio',
    fecha_hora_fin: 'fecha_hora_fin',
    estado: 'estado',
    motivo_consulta: 'motivo_consulta',
    fecha_creacion: 'fecha_creacion'
};
exports.CobrosScalarFieldEnum = {
    id: 'id',
    paciente_id: 'paciente_id',
    cita_id: 'cita_id',
    monto_total: 'monto_total',
    monto_pagado: 'monto_pagado',
    saldo_pendiente: 'saldo_pendiente',
    fecha_emision: 'fecha_emision'
};
exports.Documentos_clinicosScalarFieldEnum = {
    id: 'id',
    paciente_id: 'paciente_id',
    subido_por: 'subido_por',
    nombre_archivo: 'nombre_archivo',
    tipo_documento: 'tipo_documento',
    archivo_url: 'archivo_url',
    fecha_subida: 'fecha_subida'
};
exports.Historial_pagosScalarFieldEnum = {
    id: 'id',
    cobro_id: 'cobro_id',
    monto_abonado: 'monto_abonado',
    metodo_pago: 'metodo_pago',
    fecha_pago: 'fecha_pago'
};
exports.Notas_clinicasScalarFieldEnum = {
    id: 'id',
    paciente_id: 'paciente_id',
    dentista_id: 'dentista_id',
    cita_id: 'cita_id',
    diagnostico: 'diagnostico',
    tratamiento_realizado: 'tratamiento_realizado',
    notas_evolucion: 'notas_evolucion',
    odontograma_estado: 'odontograma_estado',
    fecha_consulta: 'fecha_consulta'
};
exports.PacientesScalarFieldEnum = {
    id: 'id',
    perfil_id: 'perfil_id',
    nombre_completo: 'nombre_completo',
    telefono: 'telefono',
    correo: 'correo',
    fecha_nacimiento: 'fecha_nacimiento',
    antecedentes_medicos: 'antecedentes_medicos',
    fecha_registro: 'fecha_registro'
};
exports.PerfilesScalarFieldEnum = {
    id: 'id',
    nombre_completo: 'nombre_completo',
    telefono: 'telefono',
    rol: 'rol',
    fecha_creacion: 'fecha_creacion'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map
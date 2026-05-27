"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_role = exports.estado_cita = exports.one_time_token_type = exports.oauth_response_type = exports.oauth_registration_type = exports.oauth_client_type = exports.oauth_authorization_status = exports.factor_type = exports.factor_status = exports.code_challenge_method = exports.aal_level = void 0;
exports.aal_level = {
    aal1: 'aal1',
    aal2: 'aal2',
    aal3: 'aal3'
};
exports.code_challenge_method = {
    s256: 's256',
    plain: 'plain'
};
exports.factor_status = {
    unverified: 'unverified',
    verified: 'verified'
};
exports.factor_type = {
    totp: 'totp',
    webauthn: 'webauthn',
    phone: 'phone'
};
exports.oauth_authorization_status = {
    pending: 'pending',
    approved: 'approved',
    denied: 'denied',
    expired: 'expired'
};
exports.oauth_client_type = {
    public: 'public',
    confidential: 'confidential'
};
exports.oauth_registration_type = {
    dynamic: 'dynamic',
    manual: 'manual'
};
exports.oauth_response_type = {
    code: 'code'
};
exports.one_time_token_type = {
    confirmation_token: 'confirmation_token',
    reauthentication_token: 'reauthentication_token',
    recovery_token: 'recovery_token',
    email_change_token_new: 'email_change_token_new',
    email_change_token_current: 'email_change_token_current',
    phone_change_token: 'phone_change_token'
};
exports.estado_cita = {
    programada: 'programada',
    confirmada: 'confirmada',
    cancelada: 'cancelada',
    completada: 'completada',
    no_asistio: 'no_asistio'
};
exports.user_role = {
    administrador: 'administrador',
    dentista: 'dentista',
    recepcionista: 'recepcionista',
    paciente: 'paciente'
};
//# sourceMappingURL=enums.js.map
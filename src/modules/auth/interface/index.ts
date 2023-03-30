

export const AuthType = {
    ROLE_ADMIN: Symbol('ROLE_ADMIN'),
    ROLE_USER: Symbol('ROLE_USER'),
    ROLE_GUEST: Symbol('ROLE_GUEST'),
    ROLE_NONE: Symbol('ROLE_NONE'),
} as const;

export type AuthType = typeof AuthType[keyof typeof AuthType];

export interface ISignInDto {

}

export interface ISignOutBodyData {

}

import {create} from "zustand";
import {persist} from "zustand/middleware";

export interface IAuthState {
    authenticated: boolean,

    accessToken: string,
    accessTokenExpirationTime: number,
    refreshTokenExpirationTime: number,
    role: Array<string>,
    privilege: Array<string>,
    privilegeKeyword: Array<string>,

    actions: {
        setAccessToken: ({ accessToken, accessTokenExpirationTime, refreshTokenExpirationTime }: IAuthData) => void
        setSignInData: ({ accessToken, accessTokenExpirationTime, refreshTokenExpirationTime, role }: ISignInData) => void,
        setAuthenticated: (authenticated: boolean) => void,
        setPrivilegeKeyword: (privilegeKeyword: Array<string>) => void,
        setRole: (role: Array<string>) => void,
        signOut: () => void,
    }
};

export interface IAuthData {
    accessToken: string,
    accessTokenExpirationTime: number,
    refreshTokenExpirationTime: number,
}

export interface ISignInData {
    accessToken: string,
    accessTokenExpirationTime: number,
    refreshTokenExpirationTime: number,
    role: Array<string>,
    privilege: Array<string>,
}



const useAuthStore = create<IAuthState>()(persist((set, get) => ({

        authenticated: false,
        accessToken: '',
        accessTokenExpirationTime: 0,
        refreshTokenExpirationTime: 0,
        role: [],
        privilege: [],
        privilegeKeyword: [],

        actions: {
            setAccessToken: ({ accessToken, accessTokenExpirationTime, refreshTokenExpirationTime }: IAuthData) => {

                set((pre) => ({
                    ...pre,
                    accessToken: accessToken,
                    accessTokenExpirationTime: accessTokenExpirationTime,
                    refreshTokenExpirationTime: refreshTokenExpirationTime
                }))
            },


            setSignInData: ({ accessToken, accessTokenExpirationTime, refreshTokenExpirationTime, role, privilege }: ISignInData) => {
                set((pre) => ({
                    ...pre,
                    authenticated: true,
                    accessToken: accessToken,
                    accessTokenExpirationTime: accessTokenExpirationTime,
                    refreshTokenExpirationTime: refreshTokenExpirationTime,
                    role: role,
                    privilege: privilege,

                }))
            },

            setAuthenticated: (authenticated: boolean) => {

                set((pre) => ({
                    ...pre,
                    authenticated: authenticated
                }));

            },

            setRole: (role: Array<string>) =>
                set(pre => ({
                    ...pre,
                    role: role,

                })),

            signOut: () =>
                set(pre => ({
                    ...pre,
                    userSignId:'',
                    authenticated: false,
                    accessToken: '',
                    accessTokenExpirationTime: 0,
                    refreshTokenExpirationTime: 0,
                })),
            setPrivilegeKeyword: (privilegeKeyword: Array<string>) =>
                set(() => ({
                    privilegeKeyword: privilegeKeyword,
                })),
        }

        }),
    {
        name: `${import.meta.env.REACT_APP_NAME}-persist`,
        getStorage: () => localStorage,
        partialize: (state) => ({
            accessToken: state.accessToken,
            accessTokenExpirationTime: state.accessTokenExpirationTime,
            refreshTokenExpirationTime: state.refreshTokenExpirationTime,
        }),

    }
));

export default useAuthStore;

export const useAuthenticated = () => useAuthStore(state => state.authenticated);
export const useAccessToken = () => useAuthStore(state => state.accessToken);
export const useAccessTokenExpirationTime = () => useAuthStore(state => state.accessTokenExpirationTime);
export const useRefreshTokenExpirationTime = () => useAuthStore(state => state.refreshTokenExpirationTime);
export const useRole = () => useAuthStore(state => state.role);
export const usePrivilege = () => useAuthStore(state => state.privilege);

export const useAuthAction = () => useAuthStore(state => state.actions);
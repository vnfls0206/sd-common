import {useQuery} from 'react-query';
import authApi from '../../auth/service/api';
import useAuthStore, {
    useAccessToken, useAccessTokenExpirationTime, useAuthAction,
    useAuthenticated, useRefreshTokenExpirationTime,
} from '../../auth/state';
import {AuthType} from '../interface';

const AuthService = {


    getAuthenticated: () => {

        const authenticated = useAuthenticated();
        const accessToken = useAccessToken();
        const accessTokenExpirationTime = useAccessTokenExpirationTime();
        const refreshTokenExpirationTime = useRefreshTokenExpirationTime();

        const authAction = useAuthAction();

        const queryFn = new Promise<boolean>(async (resolve) => {
            if (!authenticated) {                                                                   //인증 x
                if (AuthService.isTokenExpired('refresh', refreshTokenExpirationTime)) {    //refresh 토큰 X
                    return resolve(false);
                } else {

                    if (AuthService.isTokenExpired(accessToken, accessTokenExpirationTime)) {   ///refresh 토큰 o access 토큰 x
                        await resolve(AuthService.reissue())
                    } else {                                                                    ///refresh 토큰 o access 토큰 o
                        return resolve(true);
                    }
                }
            } else {
                return resolve(true);                                                          //인증 o -> 인증 됨
            }

            return resolve(false);
        });


        return useQuery<boolean, unknown, boolean>(
            ['auth/getAuth'],
            (): Promise<boolean> => queryFn,
            {
                retry: false,
                refetchOnWindowFocus: false,
                cacheTime: 0,

                onSettled: (data, error) => {
                    authAction.setAuthenticated(data ? data : false)
                },
            });
    },


    axiosReissue: async (): Promise<any> => {
        const authAction = useAuthStore.getState().actions;

        return await authApi.tokenReissue()
            .then((response: any) => {

                    authAction.setAccessToken({...response.data.body.data.token});
                    authAction.setAuthenticated(true);
                    return response;
                }
            )
            .catch((error) => {
                    if (error.response) {
                        authAction.setAuthenticated(false);
                        return error;
                    }
                    return error;
                },
            )
    },
    reissue: async (): Promise<boolean> => {
        const authAction = useAuthStore.getState().actions;

        return await authApi.tokenReissue()
            .then((response: any) => {
                    authAction.setAccessToken({...response.data.body.data.token});
                    authAction.setAuthenticated(true);
                    return true;
                }
            )
            .catch((error) => {
                    authAction.setAuthenticated(false);
                    return false;
                },
            )
    },

    isTokenExpired: (token: string, expireDate: number) => {
        const exp = expireDate;
        const now = new Date().getTime();


        if (exp === 0 && token === '') {
            return true;
        }
        if (now < exp) {
            return false;
        } else {
            return true;
        }
    },


    getAllAuthTypeAsArray: () => Object.values(AuthType).filter(auth => auth !== AuthType.ROLE_NONE),
    getNoneAuthTypeAsArray: () => Object.values(AuthType),
    IsNoneAuthTypeRoute: (privilege: string) => !privilege.length,
    getAllAuthTypeAsArrayExcept: (authType: AuthType) => Object.values(AuthType).filter(auth => auth !== authType),
    isAdmin: (role: AuthType) => role === AuthType.ROLE_ADMIN,
    isUser: (role: AuthType) => role === AuthType.ROLE_USER,
    isGuest: (role: AuthType) => role === AuthType.ROLE_GUEST,
};

export default AuthService;
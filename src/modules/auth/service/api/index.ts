import axiosInstance from '../../../axios/axiosinstance';
import { AUTH_URL, SIGN_IN_URL, SIGN_OUT_URL, TOKEN_REISSUE_URL } from './url';
import { ISignOutBodyData} from '../../interface';
import {ISignUpBodyData} from "../../hook/useSignUp";
import {AxiosResponse} from "axios";
import {IUseVerifySignUpDto} from "../../hook/useVerifySignUp";
import {ISignInBodyData} from "../../hook/useSignIn";

const authApi  = {
    signIn: (bodyData: ISignInBodyData) => axiosInstance.post(`${AUTH_URL}${SIGN_IN_URL}`, bodyData, {noRepeat: true}),
    signOut: (bodyData: ISignOutBodyData) => axiosInstance.post(`${AUTH_URL}${SIGN_OUT_URL}`, bodyData, {noRepeat: true}),
    signUp: (bodyData: ISignUpBodyData) => axiosInstance.post(`${AUTH_URL}${SIGN_OUT_URL}`, bodyData, {noRepeat: true}),
    tokenReissue: () => axiosInstance.post(`${AUTH_URL}${TOKEN_REISSUE_URL}`, null, { noRepeat: true }),

    verifySignup: (queryString: string) => new Promise<AxiosResponse<IUseVerifySignUpDto>>(resolve => {
        const dummy: AxiosResponse<IUseVerifySignUpDto> = {
            data: {success: true},
            config: {},
            headers: {},
            request: {},
            status: 200,
            statusText: ''
        }

        return resolve(dummy)
    }),
};

export default authApi;
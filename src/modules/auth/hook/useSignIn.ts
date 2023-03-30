import {useMutation} from "react-query";
import {AxiosError} from "axios";
import authApi from "../service/api";
import {IBillingAxiosResponse, IBillingMutationOption} from "../../reactQuery/interface";


export interface ISignInBodyData {
    id: string,
    password: string,
    pushOut? : boolean
}

export interface ISignInDto {

    permission: 'USER' | 'ADMIN' | 'SYSTEM',
    roles: string[],
    privilege: string[],
    token: {
        accessToken: string,
        accessTokenExpirationTime: number,
        refreshTokenExpirationTime: number,
    }
}

export interface IUseSignInProps extends IBillingMutationOption<ISignInDto, ISignInBodyData>{
    //children?: React.ReactNode,
}

const useSignIn = (
    {
        onSuccess,
        onError,
        options
    }: IUseSignInProps
) => useMutation<IBillingAxiosResponse<ISignInDto>, AxiosError, ISignInBodyData>(
    ['auth/signIn'],
    (bodyData): Promise<any> => authApi.signIn(bodyData),
    {
        ...options,
        onSuccess: onSuccess,
        onError: onError,
        retry: false,
    },
)

export default useSignIn;
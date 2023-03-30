import {useMutation} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import authApi from "../service/api";
import {IMutationOption} from "../../reactQuery/interface";

export interface ISignUpBodyData {
    id: string,
    password: string,
    name: string,
    email: string,
    phoneNumber: string
}

export interface ISignUpDto {

}

export interface IUseSignUpProps extends IMutationOption<any, ISignUpBodyData>{
    //children?: React.ReactNode,
}

const useSignUp = (
    {
        onSuccess,
        onError,
        options
    }: IUseSignUpProps
) => useMutation<AxiosResponse, AxiosError, ISignUpBodyData>(
    ['auth/signUp'],
    (bodyData): Promise<any> => authApi.signIn(bodyData),
    {
        ...options,
        onSuccess: onSuccess,
        onError: onError,
        retry: false,
    },
)

export default useSignUp;
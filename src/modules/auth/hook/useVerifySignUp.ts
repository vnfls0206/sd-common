import {IQueryOption} from "../../reactQuery/interface";
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import authApi from "../service/api";

export interface IUseVerifySignUpDto {
    success: boolean
}

export interface IUseVerifySignUpProps extends IQueryOption<IUseVerifySignUpDto>{
    queryString: string
}

const useVerifySignUp = (
    {
        onSuccess,
        onError,
        options,
        queryString

    }: IUseVerifySignUpProps
) => useQuery<AxiosResponse<IUseVerifySignUpDto>, AxiosError, AxiosResponse<IUseVerifySignUpDto>, string[]>(
    ['verifySignUp/get'],
    (): Promise<any> => authApi.verifySignup(queryString),
    {
        ...options,
        onSuccess: onSuccess,
        onError: onError,
        retry: false,
        refetchOnWindowFocus: false,
        enabled: true,
    },
)



export default useVerifySignUp;
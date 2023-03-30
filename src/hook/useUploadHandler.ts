import React from 'react';
import {useMutation} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import authApi from "../../auth/service/api";
import {IMutationOption} from "../../reactQuery/interface";
import axiosInstance from "../../axiosinstance";
import {AUTH_URL, SIGN_IN_URL} from "../../auth/service/api/url";

export interface IUploadFileDto {

}
export interface IUploadFileBodyData {
    formData: FormData
}
export interface IUseUploadHandlerProps extends IMutationOption<any, IUploadFileBodyData>{

}

const useUploadHandler = (
    {
        onSuccess,
        onError,
        options,

    }: IUseUploadHandlerProps
) => useMutation<AxiosResponse, AxiosError, IUploadFileBodyData>(
    ['upload/file'],
    (formData): Promise<any> => axiosInstance.post(`${AUTH_URL}${SIGN_IN_URL}`, formData, {"headers" : {"content-type" : "multipart/form-data"}}),
    {
        ...options,
        onSuccess: onSuccess,
        onError: onError,
        retry: false,
    },
)
    
export default useUploadHandler;
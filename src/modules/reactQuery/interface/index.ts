import {AxiosError, AxiosResponse} from 'axios';
import { UseMutationOptions, UseQueryOptions} from 'react-query';


export interface IQuerySuccessError<T, F = unknown> {
    onSuccess?: (response: AxiosResponse<T>) => void,
    onError?: (error: AxiosError<F>) => void,
}


export interface IQueryOption<T, F = unknown> extends IQuerySuccessError<T, F>{
    options?: Omit<UseQueryOptions<AxiosResponse<T>,AxiosError<F>, AxiosResponse<T>, string[]>, 'queryKey' | 'queryFn'>
}


export interface IMutationOption<T, BodyData, F = unknown> extends IQuerySuccessError<T, F>{
    options?: Omit<UseMutationOptions<AxiosResponse<T>, AxiosError<F>, BodyData>, 'queryKey' | 'queryFn'>,
}



/*Billing Project*/


export interface IBillingResponse<T,>{
    body:  {
        data: T
    },

    timestamp: string,
    internalStatus: number,
    message: string,
}

export interface IBMSResponse<T,>{
    data: T,

    code: number,
    message: string,
}

export interface IPaging<Response>{
    content: Response,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElement: number,
    pageable: object,
    size: number,
    sort: object,
    totalElements: number,
    totalPages: number
}

export interface IBmsPaging<Response>{
    content: Response,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElement: number,
    pageable: object,
    size: number,
    sort: object,
    totalElement: number,
    totalPages: number
}

export type IBmsPagingResponse<Response> = IBmsAxiosResponse<IBmsPaging<Response[]>>
export type IBmsAxiosResponse<Response> = AxiosResponse<IBMSResponse<Response>>;




export type IBmsQueryOption<T, F = unknown> =
    IQueryOption<IBMSResponse<T>>;

export type IBmsPagingQueryOption<T> =
    IQueryOption<IBMSResponse<IBmsPaging<T[]>>>;

export type IBmsMutationOption<Response, BodyData, F = unknown> =
    IMutationOption<IBMSResponse<Response>, BodyData>






export type IBillingPagingResponse<Response> = IBillingAxiosResponse<IPaging<Response[]>>;
export type IBillingAxiosResponse<Response> = AxiosResponse<IBillingResponse<Response>>;

export type IBillingQueryOption<T> =
    IQueryOption<IBillingResponse<T>>;

export type IBillingPagingQueryOption<T> =
    IQueryOption<IBillingResponse<IPaging<T[]>>>;

export type IBillingMutationOption<Response, BodyData, F = unknown> =
    IMutationOption<IBillingResponse<Response>, BodyData>
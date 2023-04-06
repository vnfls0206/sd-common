import React from 'react';
import {Input as MuiInput} from "@mui/material";

import {UseFormRegisterReturn} from "react-hook-form/dist/types";

export interface IInputProps {
    register?: UseFormRegisterReturn,
    className?: string,
    noSpaceForm?: boolean,
    defaultValue?: unknown,

}

const ModalInput = (
    {
        register,
        className = '',
        noSpaceForm,
        defaultValue,
    }: IInputProps
) => {

    const inputStyle = {

        input: {
            '&:-webkit-autofill': {
                WebkitBoxShadow    : '0 0 0 100px #FFFFFF inset',
                WebkitTextFillColor: 'black',
            },
        },
    }
    const noSpaceFormFunc = (obj: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const str_space = /\s/;
        if (noSpaceForm) {
            if (str_space.exec(obj.target.value)) {
                obj.target.focus();
                obj.target.value = obj.target.value.replace(/\s | /gi, '');//공백제거
                return false;
            }
        }
    }
    return (
        <MuiInput
            {...register}
            sx={inputStyle}
            className={'text-sm w-full h-full  ' + className}
            disableUnderline
            onChange={noSpaceFormFunc}
            defaultValue={defaultValue}
        />
    );
};

export default ModalInput;
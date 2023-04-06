/// <reference types="react" />
import { UseFormRegisterReturn } from "react-hook-form/dist/types";
export interface IInputProps {
    register?: UseFormRegisterReturn;
    className?: string;
    noSpaceForm?: boolean;
    defaultValue?: unknown;
}
declare const ModalInput: ({ register, className, noSpaceForm, defaultValue, }: IInputProps) => JSX.Element;
export default ModalInput;

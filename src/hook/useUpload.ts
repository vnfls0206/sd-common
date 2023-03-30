import React, {useState} from "react";
import useUploadHandler from "./useUploadHandler";

const ALLOW_FILE_EXTENSION = 'jpg,jpeg,png';
const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024;    //5MB 제한

function useUpload(value: any) {

    const [file, setFile] = useState<File>();

    const fileUpload = useUploadHandler({});


    const fileUploadValidHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        const files = (target.files as FileList)[0];

        if(files === undefined) {   //파일이 없으면
            return;
        }
        if(!fileExtensionValid(files)) {    //파일 확장자가 맞지 않으면
            target.value = '';
            alert(`업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`);
            return;
        }
        if(files.size > FILE_SIZE_MAX_LIMIT) {
            target.value = '';
            alert('업로드 가능한 최대 용량은 5MB 입니다.');
            return;
        }

        setFile(files);
    }

    const fileUploadHandler = async () => {
        if(file !== undefined) {
            const formData = new FormData();
            formData.append('file', file);

            fileUpload.mutate({
                formData: formData
            })
        }
    }


}


const fileExtensionValid = ({name} : {name : string}):boolean =>{
    // 파일 확장자
    const extension = removeFileName(name);
    if(!(ALLOW_FILE_EXTENSION.indexOf(extension) > -1) || extension === '') {
        return false;
    }
    return true;
}

const removeFileName = (originalFileName:string):string => {
    const lastIndex = originalFileName.lastIndexOf(".");

    if(lastIndex < 0) {
        return "";
    }

    return originalFileName.substring(lastIndex+1).toLowerCase();
}



export default useUpload;
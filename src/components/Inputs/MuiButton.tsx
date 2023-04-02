import { useEffect, useState } from "react";
import Button from "../../ui/atom/Button";
import HeaderButton from "../../ui/atom/HeaderButton";
import parse from 'html-react-parser';
import Editor from '../../../src/app/Editor';
import Stack from '@mui/material/Stack';
//import {Editor} from '@matthamlin/react-preview-editor';
// import Prism from 'prismjs';
// import 'prismjs/components/prism-jsx';
// import 'prismjs/components/prism-javascript';


import { transform } from '@babel/standalone'

function transformCode(code) {
    return transform(code, {
        presets: [['stage-0', { decoratorsLegacy: true }], 'react'],
    }).code
}

export interface IMuiButtonProps {
}

const MuiButton = ({}: IMuiButtonProps) => {

    const [preview1, updatePreview1] = useState('');
    const [preview2, updatePreview2] = useState('');
    const [value1, setValue1] = useState(`
import * as React from 'react';
import Stack from '@mui/material/Stack';
export default function TextButtons() {
  return (
      <Stack spacing={2} direction="row">
          <Button>Primary</Button>
          <Button disabled={true}>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
      </Stack>
  );
}
`)
    const [value2, setValue2] = useState(`
import * as React from 'react';
import HeaderButton from "../../ui/atom/HeaderButton";
import { List } from "@mui/icons-material";

export default function TextButtons() {
  return (
      <HeaderButton children={}>
        <List className={'opacity-70 mr-2'} fontSize={'small'}/>
        목록으로
      </HeaderButton>
   );
  }
`)
    useEffect(()=>{
        setTagValue(value2, setValue2, updatePreview2);
        setTagValue(value1, setValue1, updatePreview1);
    }, []);

    const setTagValue = (e:string, setFunc, previewFunc) =>{
        console.log(e);
        if(e?.length > 0){
            setFunc(e);
            const startIdx = e.indexOf('return (') + 8;
            const endIdx = e.indexOf(');');
            previewFunc(e.substring(startIdx, endIdx));
            //console.log(e.substring(startIdx, endIdx))
            console.log(preview1);
            console.log(preview2);
        }
    }
    const options = {
        replace: ({attribs, name, children}) => {
            attribs = attribs || {};
            if(name == 'import'){
                return attribs
            }
            if(name == 'button'){
                return (
                    <Button {...attribs}>{children[0].data} </Button>
                )
            }
            if(name == 'headerbutton'){
                return (
                    <HeaderButton {...attribs} >
                        {children[0].data}
                    </HeaderButton>
                )
            }
        },
    };
    return (
         <div className={'flex justify-center w-full'}>
            <main className="max-w-[124rem] w-[100%]">
                <h3>1. 일반버튼 </h3>
                <div className="container__content">
                    <div className="container__view_area">
                        {parse(preview1, options)}
                    </div>

                    <div className="container_editor_area">
                        <div className="cm-force-border">

                            <Editor
                                mode="javascript"
                                //mode="typescript"
                                //dark={dark}
                                onChange={(e)=>setTagValue(e, setValue1, updatePreview1)}
                                value={value1}
                            />

                        </div>
                    </div>
                </div>

                <h3>2. 아이콘버튼 </h3>
                <div className="container__content">
                    <div className="container__view_area">
                        {parse(preview2, options)}
                    </div>

                    <div className="container_editor_area">
                        <div className="cm-force-border">
                            {/*<Provider*/}
                            {/*    code={value2}*/}
                            {/*    transformCode={transformCode}*/}
                            {/*>*/}
                            {/*    <Editor/>*/}
                            {/*</Provider>*/}
                            <Editor
                                mode="javascript"
                                onChange={(e)=>setTagValue(e, setValue2, updatePreview2)}
                                value={value2}
                            />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
export default MuiButton;
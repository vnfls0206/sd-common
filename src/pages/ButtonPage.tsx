// import React, { useState } from 'react';
//
// import { Provider, Editor, Preview } from '@matthamlin/react-preview-editor'
//
// import { transform } from '@babel/standalone'
// import Button  from "../ui/atom/Button";
// import ReactMarkdown from 'react-markdown';
//
// function transformCode(code) {
//     // `import` 구문을 처리하는 코드
//
//     // code = code.replace(/import\s+([^\s]+)\s+from\s+(['"])([^\2]+)\2/g, function (match, importVar, _, moduleName) {
//     //     const moduleObj = require(moduleName);debugger
//     //     const moduleEl = React.createElement(moduleObj.default);
//     //     ReactDOM.render(moduleEl, document.getElementById('preview'));
//     //     return `const ${importVar} = ${moduleObj};`;
//     // });
//     //return code
//     return transform(code, { presets: [['stage-0', { decoratorsLegacy: true }], 'react'] }).code
//
// }
//
// const markdown =`
//
// function App() {
//         const [count, setCount] = useState(0);
//         //require('../ui/atom/Button')
//         return <button onClick={() => setCount(count + 1)}>update count {count}</button>
//     };
//     render(<App />);
//     `
//
// export interface IButtonPageProps {
// }
//
// const ButtonPage = ({}: IButtonPageProps) => {
//     const [code, setCode] = useState(markdown);
//     const markStr = <ReactMarkdown source={Button}/>
//     console.log(markStr)
//
//     return (
//         <React.Fragment>
//         {/*<MuiButton />*/}
//             {markStr}
//             {/*{marked(markStr)}*/}
//
//                 <Button variant="contained" color="primary" >
//                     Click me
//                 </Button>
//
//             <Provider
//                 code={code}
//                 transformCode={transformCode}
//             >
//                 <div id="preview">
//                     <Preview />
//                 </div>
//                 <Editor/>
//             </Provider>
//
//
//         </React.Fragment>
//     );
// };
//
//
// ButtonPage.defaultProps = {};
//
// export default ButtonPage;
// //
// // import React, { useState } from 'react';
// // import { Controlled as CodeMirror } from 'react-codemirror2';
// // import PreviewEditor from '@matthamlin/react-preview-editor';
// //
// // // import 'codemirror/addon/display/fullscreen.css';
// // // import 'codemirror/addon/hint/show-hint.css';
// // // import 'codemirror/mode/javascript/javascript';
// // //require('codemirror/lib/codemirror.css');
// // //require('codemirror/theme/material.css');
// // //require('codemirror/theme/neat.css');
// // //require('codemirror/mode/xml/xml.js');
// // //require('codemirror/mode/javascript/javascript.js');
// //
// // export interface IButtonPageProps {
// // }
// //
// // const ButtonPage = ({}: IButtonPageProps) => {
// //     const [code, setCode] = useState('');
// //
// //     const handleCodeChange = (editor, data, value) => {
// //         setCode(value);
// //     };
// //
// //     return (
// //         <div>
// //             <div style={{ display: 'flex' }}>
// //                 {/*<CodeMirror*/}
// //                 {/*    value={code}*/}
// //                 {/*    onBeforeChange={handleCodeChange}*/}
// //                 {/*    options={{*/}
// //                 {/*        mode: 'jsx',*/}
// //                 {/*        theme: 'material',*/}
// //                 {/*        lineNumbers: true,*/}
// //                 {/*    }}*/}
// //                 {/*    style={{ flex: 1 }}*/}
// //                 {/*/>*/}
// //                 <CodeMirror
// //                     value={code}
// //                     onBeforeChange={handleCodeChange}
// //                     options={{
// //                         mode: 'javascript',
// //                         theme: 'default',
// //                         lineNumbers: true,
// //                     }}
// //                 />
// //
// //                 {/*<PreviewEditor value={code} style={{ flex: 1 }} />*/}
// //             </div>
// //         </div>
// //     );
// // }
// //
// // export default ButtonPage;


import React from 'react';

// import parse from 'html-react-parser';
// import Button from "../ui/atom/Button";
import MuiButton from "../components/Inputs/MuiButton";

export interface IButtonPageProps {
}

const ButtonPage = ({}: IButtonPageProps) => {
    // const htmlString = '<button>mui</button>';
    // const options = {
    //     replace: (node)=>{
    //         if(node.name == 'button'){
    //             console.log(node.children[0])
    //             return (<Button {...node.attribs} >{node.children[0].data}</Button>);
    //         }
    //     },
    //     trim: true,
    //     decodeEntities: true
    // };
    return (
        <MuiButton/>
        // <div>
        //
        //     {parse(htmlString, options)}
        // </div>
    );
}
export default ButtonPage;
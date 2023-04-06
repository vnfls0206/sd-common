import Button from "../../ui/atom/Button";
import HeaderButton from "../../ui/atom/HeaderButton";
import Stack from '@mui/material/Stack';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Refresh } from "@mui/icons-material";

const theme = createTheme();

const scope = {
    Button,
    HeaderButton,
    Stack,
    Refresh,
};

export interface IMuiButtonProps {
}

const MuiButton = ({}: IMuiButtonProps) => {
    const [normalCode, setNormalCode] = useState(`
        <Stack spacing={2} direction="row">
            <Button> 일반버튼 </Button>
            <Button disabled> disabled </Button>
        </Stack>
    `);
    const [iconCode, setIconCode] = useState(`
        <Stack spacing={2} direction="row">
            <HeaderButton>아이콘 버튼 </HeaderButton>
            <HeaderButton>
                <Refresh className={'opacity-70 mr-2'} fontSize={'small'}/>
                새로고침
            </HeaderButton>
        </Stack>
    `);

    return (
        <div className={'flex justify-center w-full'}>
            <main className="max-w-[124rem] w-[100%]">
                <ThemeProvider theme={theme}>

                    <div className="container__content_title">
                        <h2>1. 일반버튼 </h2>
                    </div>
                    <div className="container__content">
                        <LiveProvider code={normalCode} scope={scope}>
                            <div className="container__view_area">
                                <LivePreview/>
                            </div>

                            <div className="container_editor_area">
                                <div className="cm-force-border">
                                    <LiveEditor code={normalCode} onChange={setNormalCode}/>
                                    <LiveError/>
                                </div>
                            </div>
                        </LiveProvider>
                    </div>

                    <div className="container__content_title">
                        <h2>2. 아이콘 버튼 </h2>
                    </div>
                    <div className="container__content">
                        <LiveProvider code={iconCode} scope={scope}>
                            <div className="container__view_area">
                                <LivePreview/>
                            </div>

                            <div className="container_editor_area">
                                <div className="cm-force-border">
                                    <LiveEditor code={iconCode} onChange={setIconCode}/>
                                    <LiveError/>
                                </div>
                            </div>
                        </LiveProvider>
                    </div>


                </ThemeProvider>
            </main>
        </div>
    );
}
export default MuiButton;
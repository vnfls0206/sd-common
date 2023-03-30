import React from 'react';
import {Box} from "@mui/material";

export interface IFooterProps {
    pathName: string
}

const Footer = (
    {
        pathName,
    }: IFooterProps,
) => {
    return (
        <Box sx={{ height:'100px', position:'relative', transform: 'translateY(-100%)', backgroundColor:'pink'}}>
            Copyright ©2022. [] Limited
        </Box>
    );
}

export default Footer;
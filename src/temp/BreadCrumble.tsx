import React from 'react';
import {Link,  Breadcrumbs} from '@mui/material';
import {useNavigate} from "react-router-dom";

import * as Path from '../modules/routing/path';

export interface IBreadCrumbleProps {
    breadCrumble: any,
}
const BreadCrumble = (
    {
        breadCrumble,
    }: IBreadCrumbleProps) => {
    const navigate = useNavigate();

    const pathFind = (bread: any, index: number) => {
        if (index + 1 === breadCrumble.length) {
            return (
                <Link underline="none" className={"text-zinc-600"}>
                    {bread.title}
                </Link>
            )
        } else {
            return (
                <Link
                    key={bread.key}
                    onClick={event =>  navigate(bread.path)}
                    underline="none"
                    //href={bread.path}
                    className={'text-zinc-800 cursor-pointer'}
                >
                    {bread.title}
                </Link>
            )
        }
    }

    return (
        <React.Fragment>
            <div role="presentation" className={'mb-6'}>
                <Breadcrumbs aria-label="breadcrumb" separator={"•"}>
                    <Link underline="none" color="inherit" onClick={event => navigate(Path.HOME_PATH)} className={"text-zinc-800 cursor-pointer"}>
                        Dashboard
                    </Link>
                    {
                        breadCrumble.length >= 1 && breadCrumble.map((crumble: any, index: any) =>
                            <div key={crumble}>
                                {pathFind(crumble, index)}
                            </div>
                        )
                    }

                </Breadcrumbs>
            </div>
        </React.Fragment>

    );
};

export default BreadCrumble;
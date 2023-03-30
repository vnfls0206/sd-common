import RoutesContainer from './RoutesContainer';
import Loader from '../components/layout/loading/PageLoader';
import React  from 'react';

/**
 * This is the main entry app component. Here we wll define the actual app layout
 * and locale provider
 *
 */

export interface IAppContainerProps {
}

const AppContainer: React.FC<IAppContainerProps> = (
    {

    }
) => {

    const loading = false;


    return (
        <React.Fragment>
            {loading && <Loader/>}
            <RoutesContainer/>
        </React.Fragment>
    );
};

export default AppContainer;
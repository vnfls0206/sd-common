import * as Path from '../path';



const RouteService = {

    IsNoneAuthPage: (pathName: string) => {
        return (
            pathName === Path.SIGN_IN_PATH ||
            pathName === Path.SIGN_UP_PATH
        )
    },
};


export default RouteService;
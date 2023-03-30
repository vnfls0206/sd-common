import React from "react";
import loadable from '@loadable/component';
import PageLoader from "../components/layout/loading/PageLoader";

const ReactQueryContainer = loadable(() => import('./ReactQueryContainer'), {fallback: <PageLoader/>});

function App() {
    return (
        <ReactQueryContainer/>
    );
}

export default App;

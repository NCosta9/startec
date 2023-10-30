import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';




function RoutesApp() {
    return (
        <HashRouter basename='/'>
            <Routes>

                <Route path="/" element={<Home />} />


            </Routes>

        </HashRouter>

    )

}

export default RoutesApp;
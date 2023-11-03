import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import EmailFailed from './errors/EmailFailed';
import EmailSucesso from './errors/EmailSucesso';




function RoutesApp() {
    return (
        <HashRouter basename='/'>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/sucesso" element={ <EmailSucesso/> } />
                <Route path="/error" element={ <EmailFailed/> } />

            </Routes>

        </HashRouter>

    )

}

export default RoutesApp;
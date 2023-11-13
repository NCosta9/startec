import { HashRouter, Routes, Route } from 'react-router-dom';

import EmailFailed from './errors/EmailFailed';
import EmailSucesso from './errors/EmailSucesso';
import Home from './Pages/Home';
import HomeBlog from './Pages/HomeBlog';




function RoutesApp() {
    return (
        <HashRouter basename='/'>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/sucesso" element={ <EmailSucesso/> } />
                <Route path="/error" element={ <EmailFailed/> } />
                <Route path="/10-vantagens-de-usar-busway-barramento-blindado" element={<HomeBlog/>}/>
            </Routes>

        </HashRouter>

    )

}

export default RoutesApp;
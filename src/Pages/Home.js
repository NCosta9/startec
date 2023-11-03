import 'animate.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Sobre from '../Components/Main/Sobre';
import Banner_principal from '../Components/Main/Banner_principal';
import Vantagens from '../Components/Main/Vantagens';
import Clientes from '../Components/Main/Clientes';
import Services from '../Components/Main/Services';
import Cta_Section from '../Components/Main/Cta_Section';
import Produtos from '../Components/Main/Produtos';
import Contato from '../Components/Main/Contato';
import VoltaHome from '../Components/Buttons/VoltaHome';

export default function Home(){
    return(
<>
<Header/>
<Banner_principal/>
<main id="main">
<Sobre/>
<Vantagens/>
<Clientes/>
<Services/>
<Cta_Section/>
<Produtos/>
<Contato/>
</main>

    <Footer/>
    <VoltaHome/>
</>
    );
}
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../../globals.css'


export default function Banner_principal() {
    return (
        <>
            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
                    <h2>Bem Vindo a Startec</h2>
                    {/* <h3>Potência Sem Limites: Conectando Você ao Futuro.</h3> */}
                    <h4>
                            Em um mundo movido pela energia, sua escolha faz toda a diferença. Escolher o nosso serviço de <span> Barramento Blindado (Busway) significa escolher a excelência, confiabilidade e eficiência para suas necessidades de energia.</span>
                    </h4>
                    <AnchorLink href="#contact" class="btn-get-started scrollto mt-3">Solicitar Orçamento</AnchorLink>
                </div>
            </section>
        </>
    )
}
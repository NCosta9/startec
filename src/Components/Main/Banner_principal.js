import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../../index.css'
export default function Banner_principal() {
    return (
        <>
            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
                    <h1>Bem Vindo a Startec</h1>
                    <h2>Potência Sem Limites: Conectando Você ao Futuro.</h2>
                    <h3>
                            Em um mundo movido pela energia, sua escolha faz toda a diferença. Escolher o nosso serviço de <span>busway significa escolher a excelência, confiabilidade e eficiência para suas necessidades de energia.</span>
                    </h3>
                    <AnchorLink href="#contact" class="btn-get-started scrollto mt-3">Solicitar Orçamento</AnchorLink>
                </div>
            </section>
        </>
    )
}
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Cta_Section(){
    return(
<>
<section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">

        <div class="text-center">
          <h3>Fale Conosco</h3>
          <p>Estamos prontos para ajudar sua empresa a implementar soluções de Busway de alta qualidade. Entre em contato conosco para obter mais informações ou solicitar uma cotação.</p>
          <AnchorLink class="cta-btn" href="#contact">Solicitar Orçamento</AnchorLink>
        </div>

      </div>
    </section>
</>
    );
}
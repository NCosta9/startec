export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/startec-bg.jpg" alt="" className="img-fluid"/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h1 className="fw-bold">Porquê Nós?</h1>
            <h2 className="fw-lighter">
              O nosso serviço de Busway é projetado para fornecer soluções elétricas eficientes e seguras para empresas de todos os tamanhos.
            </h2>
            <p>
              O Busway é um sistema elétrico modular e flexível que oferece uma alternativa eficaz e segura aos métodos tradicionais de distribuição de energia.
              Além da manutenção do Busway ser mais simples em comparação com sistemas convencionais.
            </p>
            <p className="text-decoration-underline fw-bold">
              Oferecemos uma série de vantagens ao escolher nossos serviços de Busway:
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
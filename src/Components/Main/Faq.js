import Accordion from 'react-bootstrap/Accordion';

export default function Faq() {
  return (
    <>


      <section id="faq" className="faq">
        <div className="container-fluid" data-aos="fade-up">

          <div className="row gy-4">

            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-1 order-lg-2">

              <div className="content px-xl-5">
                <h3>Perguntas <strong>Frequentes</strong></h3>
                <p>
                Veja algumas perguntas frequentes que podem surgir em relação aos serviços de busway. 
                </p>
              </div>

              <Accordion className=" accordion px-xl-5" id="faqlist">

                <Accordion.Item className="accordion-item" data-aos="fade-up" data-aos-delay="200" eventKey="0">
                  <Accordion.Header className="accordion-header">
                   <h4> Como é feita a instalação de um sistema de busway? </h4> 
                  </Accordion.Header>
                  <Accordion.Body className='accordion-body' >
                    A instalação do busway é geralmente mais rápida e simples em comparação com a fiação convencional. Ele pode ser montado no local, facilitando a adaptação a diferentes layouts e requisitos de espaço.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className="accordion-item" data-aos="fade-up" data-aos-delay="400" eventKey="1">
                  <Accordion.Header className="accordion-header">
                   <h4> Os sistemas de busway são seguros?</h4> 
                  </Accordion.Header>
                  <Accordion.Body className='accordion-body' >
                  Sim, os sistemas de busway são projetados com foco na segurança. Eles geralmente vêm com proteções integradas para evitar riscos elétricos e são construídos com materiais resistentes ao fogo.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item className="accordion-item" data-aos="fade-up" data-aos-delay="600" eventKey="2">
                  <Accordion.Header className="accordion-header">
                   <h4> Qual é a durabilidade dos sistemas de busway? </h4> 
                  </Accordion.Header>
                  <Accordion.Body className='accordion-body' >
                  Os sistemas de busway são construídos para serem duráveis e de longa duração. A durabilidade é uma característica fundamental para garantir um fornecimento de energia confiável ao longo do tempo.
                  </Accordion.Body>
                </Accordion.Item>

              

              </Accordion>

            </div>

            <div className="col-lg-5 align-items-stretch order-2 order-lg-1 img">
              <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/faq-img.png" alt="Imagem de projeto de Busway(barramento blindado) Empresa startec montagem" className="img-fluid" />
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
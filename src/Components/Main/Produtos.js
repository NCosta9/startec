import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Produtos() {
    return (
        <>
            <section id="pricing" className="pricing">
                <div className="container">

                    <div className="section-title">
                        <span>Produtos</span>
                        <h3>Produtos</h3>
                        <p>Experimente a revolução em eficiência energética com nosso busway de última geração. Um passo à frente da concorrência.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="150">
                            <div className="box">
                                <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/produtos/imagem-barra-espacada?t=2023-11-01T16%3A02%3A00.395Z" alt="..." />
                                <div className="card-body">
                                    <h5 className="mt-3">Barramento Blindado</h5>
                                    <h6>(Barra Espaçada)</h6>
                                    <div className="btn-wrap">
                                    <AnchorLink href="#contact" className="btn-buy">Saiba Mais</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="150">
                            <div className="box">
                                <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/produtos/imagem-compacto-de-barra-colada.webp"  alt="..." />
                                <div className="card-body">
                                    <h5 className="mt-3">Barramento Blindado</h5>
                                    <h6>(Compacto de Barra Colada)</h6>
                                    <div className="btn-wrap">
                                    <AnchorLink href="#contact" className="btn-buy">Saiba Mais</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="150">
                            <div className="box">
                                <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/produtos/imagem-barramento-ventilado.webp"  alt="..." />
                                <div className="card-body">
                                    <h5 className="mt-3">Barramento Blindado</h5>
                                    <h6>(Barramento Ventilado)</h6>
                                    <div className="btn-wrap">
                                    <AnchorLink href="#contact" className="btn-buy">Saiba Mais</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="150">
                            <div className="box">
                                <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/produtos/Quadro%20de%20comando.webp"  alt="..." />
                                <div className="card-body">
                                    <h5 className="mt-3">Quadro de Comando</h5>
                                    <h6>(Caixa para montagem de Painel Elétrico)</h6>
                                    <div className="btn-wrap">
                                    <AnchorLink href="#contact" className="btn-buy">Saiba Mais</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="150">
                            <div className="box">
                                <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/produtos/imagem-qgbt.webp?t=2023-11-01T16%3A09%3A48.002Z"  alt="..." />
                                <div className="card-body">
                                    <h5 className="mt-3">Quadro Geral  </h5>
                                    <h6>(Baixa Tensão)</h6>
                                    <div className="btn-wrap">
                                    <AnchorLink href="#contact" className="btn-buy">Saiba Mais</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="150">
                            <div className="box">
                                <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/produtos/cofre.png?t=2023-11-01T16%3A11%3A54.347Z"  alt="..." />
                                <div className="card-body">
                                    <h5 className="mt-3">Cofre de Derivação</h5>
                                    <h6>()</h6>
                                    <div className="btn-wrap">
                                        <AnchorLink href="#contact" className="btn-buy">Saiba Mais</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>
            </section>
        </>
    )
}
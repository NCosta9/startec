


export default function Clientes() {
    return (
        <>
            <div className="section-title">
                <span>Clientes</span>
                <h1>Nossos Clientes</h1>
          <hr class="divider"/>

            </div>

            <section id="clients" className="clients">
                <div className="container" data-aos="zoom-in">

                    {/* <div className="row d-flex align-items-center">

                        {[
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/allegro.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/duo.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/lux.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-bellavista.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-coimbra.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish.png',

                        ].map((descktop) => (
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={descktop.toLowerCase()} className="img-fluid" alt="" />
                            </div>

                        ))}




                    </div> */}


                    <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/e-business.jpeg?t=2023-11-01T15%3A21%3A57.198Z" />
                            <h2 className="fw-normal">E-Business</h2>
                            <p>Aparecida de Goiânia - GO</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/lux.jpeg" />
                            <h2 className="fw-normal">Lux Flamboyant</h2>
                            <p>Goiânia - GO</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/duo.jpeg" />
                            <h2 className="fw-normal">DUO Residence & Mall </h2>
                            <p>Águas Claras - DF</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-aeroporto.jpeg" />
                            <h2 className="fw-normal">Wish Aeroporto</h2>
                            <p>Goiânia - GO</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-bellavista.jpeg" />
                            <h2 className="fw-normal">Wish Bella Vista</h2>
                            <p>Goiânia - GO</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-coimbra.jpeg" />
                            <h2 className="fw-normal">Wish Coimbra</h2>
                            <p>Goiânia - GO</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
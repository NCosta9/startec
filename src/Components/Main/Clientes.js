


export default function Clientes() {
    return (
        <>
            <div class="section-title">
                <span>Clientes</span>
                <h2>Nossos Clientes</h2>
            </div>

            <section id="clients" class="clients">
                <div class="container" data-aos="zoom-in">

                    {/* <div class="row d-flex align-items-center">

                        {[
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/allegro.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/duo.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/lux.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-bellavista.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-coimbra.png',
                            'https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish.png',

                        ].map((descktop) => (
                            <div class="col-lg-2 col-md-4 col-6">
                                <img src={descktop.toLowerCase()} class="img-fluid" alt="" />
                            </div>

                        ))}




                    </div> */}


                    <div class="row">
                        <div class="col-lg-4">
                            <img class="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/e-business.jpeg?t=2023-11-01T15%3A21%3A57.198Z" />
                            <h2 class="fw-normal">E-Business</h2>
                            <p>Aparecida de Goiânia - GO</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/lux.jpeg" />
                            <h2 class="fw-normal">Lux Flamboyant</h2>
                            <p>Goiânia - GO</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/duo.jpeg" />
                            <h2 class="fw-normal">DUO Residence & Mall </h2>
                            <p>Águas Claras - DF</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-aeroporto.jpeg" />
                            <h2 class="fw-normal">Wish Aeroporto</h2>
                            <p>Goiânia - GO</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-bellavista.jpeg" />
                            <h2 class="fw-normal">Wish Bella Vista</h2>
                            <p>Goiânia - GO</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle" height="200px" width="200px" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/clientes/wish-coimbra.jpeg" />
                            <h2 class="fw-normal">Wish Coimbra</h2>
                            <p>Goiânia - GO</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
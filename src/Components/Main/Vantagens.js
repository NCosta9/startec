import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Vantagens() {
    return (
        <section id="why-us" className="why-us">
            <div className="container">

                <div className="row">

                    <div className="col-lg-4 " data-aos="fade-up">
                        <div className="box">
                            <span>01</span>
                            <h4>Flexibilidade</h4>
                            <p>O Barramento Blindado permite uma distribuição de energia flexível, permitindo ajustes rápidos de layout e expansão.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="150">
                        <div className="box">
                            <span>02</span>
                            <h4>Eficiência Energética</h4>
                            <p> Reduzimos as perdas de energia e melhoramos a eficiência do seu sistema elétrico.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                        <div className="box">
                            <span>03</span>
                            <h4> Segurança</h4>
                            <p>O Barramento Blindado é projetado com recursos de segurança, como proteção contra sobrecarga e curto-circuito.</p>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}
AOS.init();
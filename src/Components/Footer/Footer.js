import '../../globals.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Footer(){
    return(
        <>

        <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
    
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3 className='logo'><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/logo/logo-branca.png" alt="" className="logo-img"/></h3>
                  <p>St Sha Conjunto 5 Chacara 11-a Lote 2 <br/>
                 CEP 71.995-065, Brasília-DF<br/><br/>
                    <strong>Telefone:</strong> (61) 98524-0010<br/>
                    <strong>Email:</strong> atendimento@startecmontagem.com.br<br/></p>
                  <div className="social-links mt-3">
                    <a href="https://www.facebook.com/startecmontagem" className=""><i ><svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></i></a>
                    <a href="https://www.instagram.com/startecmontagem/" className="instagram"><i ><svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></i></a>
                  
                  </div>
                </div>
              </div>
    
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Acesso Rápido</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <AnchorLink href="#navbar">- Home</AnchorLink></li>
                  <li><i className="bx bx-chevron-right"></i> <AnchorLink href="#pricing">- Catálago</AnchorLink></li>
                  <li><i className="bx bx-chevron-right"></i> <AnchorLink href="#navbar">- Portfolio</AnchorLink></li>
                  <li><i className="bx bx-chevron-right"></i> <AnchorLink href="#contact">- Contato</AnchorLink></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="termos">- Termos de Serviço</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="politicas">- Politica de Privacidade</a></li>
                </ul>
              </div>
    
              <div className="col-lg-2 col-md-6 footer-links">
                {/* <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul> */}
              </div>
    
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Startec Montagem</h4>
                <p>Não aceite menos quando se trata de fornecimento de energia. Nossos produtos de busway garantem energia segura para suas operações.</p>
                {/* <form action="" method="post">
                  <input type="email" name="email"/>
                  <input type="submit" value="Subscribe"/>
                </form>
     */}
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Startec Montagem e Eletricidade do Brasil Ltda- CNPJ: 52.382.012/0001-21 </span></strong>. Todos os direitos reservados.
          </div>
          <div className="credits">
         
            Criado por <a href="https://api.whatsapp.com/send?phone=5538988483981">PromovaOnline</a>
          </div>
        </div>
      </footer>
      
        </>
        
    );
}
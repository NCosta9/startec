import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../../index.css'


export default function Header() {
  return (
    <>
      <section id="topbar" class="d-flex align-items-center  d-none d-sm-block">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <a href="mailto:atendimento@startecmontagem.com.br">
              <i class="bi bi-envelope-fill">
                <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                  <path fill="#e82d2d" fill-rule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z" />
                </svg>
              </i>atendimento@startecmontagem.com.br</a>
            <i class="bi bi-phone-fill phone-icon"><svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="#e82d2d" d="M17 2a2 2 0 0 1 1.995 1.85L19 4v16a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20V4a2 2 0 0 1 1.85-1.995L7 2h10Zm-4.5 14h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z" /></g></svg></i>
            (61) 98524-0010
          </div>
          <div class="social-links d-none d-md-block">
            <a href="#" class="facebook"><i class="bi bi-facebook"><svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"><svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" /></svg></i></a>
          </div>
        </div>
      </section>

      <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
          <a href="/home" class="logo"><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/startec/logo/logo-branca.png" alt="" class="logo" /></a>
          <h1 class="logo"><a href="/home">Startec</a></h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li><AnchorLink class="nav-link scrollto active" href="#hero">Home</AnchorLink></li>
              <li><AnchorLink class="nav-link scrollto" href="#about">Sobre</AnchorLink></li>
              <li><AnchorLink class="nav-link scrollto" href="#services">Serviços</AnchorLink></li>
              <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
              <li><AnchorLink class="nav-link scrollto" href="#clients">Clientes</AnchorLink></li>

              <li><AnchorLink class="nav-link scrollto" href="#pricing">Produtos</AnchorLink></li>

              <li><AnchorLink class="nav-link scrollto" href="#contact">Contato</AnchorLink></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </>
  );
}
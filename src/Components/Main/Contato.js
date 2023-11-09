import SendOrcamento from "../../Utils/SendOrcamento";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';




export default function Contato() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { register, handleSubmit, getValues } = useForm();

  //Envia todos os dados do formulario por meio de uma url do whatsapp
  const formValues = getValues();

  const nome = `${formValues.nome}`
  const telefone = `${formValues.telefone}`
  const email = `${formValues.email}`
  const mensagem = `${formValues.mensagem}`

  //Dados para envio via Email
  const assunto = "Novo Orçamento";
  const cabecalho = "Ja recebemos as informações para seu " + assunto + " ,dentro de alguns instantes entraremos em contato com mais informações. Verifique abaixo se as informações que recebemos estão corretas: ";







  return (
    <>
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <span>Contato</span>
            <h1>Contato</h1>
            <p>Fale conosco em um dos canais de atendimento ao cliente abaixo para solicitar seu orçamento</p>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#cc1616" d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z" /><path fill="#cc1616" d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6z" /></svg>
                </i>
                <h3>Endereço</h3>
                <p>SH Arniqueiras Col. Agrícola Arniqueira - Taguatinga, Brasília - DF</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#cc1616" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z" /></svg>
                </i>
                <h3>Email</h3>
                <p>atendimento@startecmontagem.com.br</p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59a7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43A15.28 15.28 0 0 0 6.3 17.7A15.28 15.28 0 0 0 16.57 22zM6 5.41L8.59 8L7.3 9.29a1 1 0 0 0-.3.91a10.12 10.12 0 0 0 2.3 4.5a10.08 10.08 0 0 0 4.5 2.3a1 1 0 0 0 .91-.27L16 15.41L18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z" /><path fill="#cc1616" d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z" /></svg>
                </i>
                <h3>Telefone</h3>
                <p>(61) 98524-0010</p>
              </div>
            </div>

          </div>

          <div className="row" data-aos="fade-up">

            <div className="col-lg-6 ">
              <iframe className="localization mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3838.1197851871484!2d-48.02054712554488!3d-15.850300424332847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDUxJzAxLjEiUyA0OMKwMDEnMDQuNyJX!5e0!3m2!1spt-BR!2sbr!4v1698763996022!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="col-lg-6">

              <form className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Digite seu nome..." {...register("nome", { required: true })} required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="tel" className="form-control" name="telefone" id="subject" placeholder="Digite seu Telefone..."{...register("telefone", { required: true })} required />
                  </div>
                  <div className="form-group mt-3">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Digite seu email..." {...register("email", { required: true })} required />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Escreva uma mensagem..." {...register("mensagem", { required: true })} required></textarea>
                </div>

                <div className="text-center">
                  <button
                    className="mt-2"
                    type="button"
                    onClick={handleSubmit(handleShow)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" /></svg>
                    Enviar Mensagem
                  </button>
                </div>

                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header>
                    <Modal.Title>
                      <h4 className="mt-2 fw-bold">Informações:</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Após recebermos sua mensagem, dentro de alguns instantes entraremos em contato em um dos meios de contato fornecido nos campos de contato!</p>
                    <p>Horario de atendimento: <b>Segunda a Sexta das 8h às 17h.</b> </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <SendOrcamento
                      text="Enviar mensagem"
                      nome={nome}
                      telefone={telefone}
                      email={email}
                      assunto={assunto}
                      cabecalho={cabecalho}
                      mensagem={mensagem}


                    />
                  </Modal.Footer>
                </Modal>

              </form>
            </div>

          </div>

        </div>
      </section>



    </>
  )
}
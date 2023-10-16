import { useState } from 'react';

function PageContatoComponent() {
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviarMensagem() {
    let texto = `Olá, meu nome é ${nome}`;
    texto += `\n\n Gostaria de falar sobre o assunto: ${assunto}`;
    texto += `\n Mensagem: ${mensagem}`;

    const encode = encodeURI(texto);
    const celular = '5521975394895';
    const URL = `https://wa.me/${celular}?text=${encode}`;

    window.open(URL);
  }

  return (
    <div className="pagecontato-component">
      <section id="contact">
        <div
          className="top-header wow animate__animated animate__fadeInUp"
          data-wow-delay="0.3s"
        >
          <h1>Entrar em contato</h1>
          <span>
            Se você tem um projeto em mente, entre em contato comigo aqui!
          </span>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={enviarMensagem}>
              <div
                className="form-control wow animate__animated animate__fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="form-inputs">
                  <input
                    required
                    type="text"
                    className="input-field"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Assunto"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                  />
                </div>
                <div className="text-area">
                  <textarea
                    required
                    placeholder="Mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-button">
                  <button className="btn" type="submit">
                    Enviar <i className="pi pi-send"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col">
            <div
              className="contact-info wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              <h2>
                Me encontre <i className="pi pi-arrow-circle-down"></i>
              </h2>
              <p>
                <i className="pi pi-envelope"></i> E-mail:
                2001oliveira.victor@gmail.com
              </p>
              <p>
                <i className="pi pi-whatsapp"></i>(21) 97539-4895
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageContatoComponent;

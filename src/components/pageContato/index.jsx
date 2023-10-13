function PageContatoComponent() {
  return (
    <div className="pagecontato-component">
      <section id="contact">
        <div className="top-header">
          <h1>Entrar em contato</h1>
          <span>
            Se você tem um projeto em mente, entre em contato comigo aqui!
          </span>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-control">
              <div className="form-inputs">
                <input type="text" className="input-field" placeholder="Nome" />
                <input
                  type="text"
                  className="input-field"
                  placeholder="E-mail"
                />
              </div>
              <div className="text-area">
                <textarea placeholder="Mensagem"></textarea>
              </div>
              <div className="form-button">
                <button className="btn">
                  Enviar <i className="pi pi-send"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contact-info">
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

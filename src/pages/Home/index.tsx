import React from 'react';


const Home = () => {
    return (
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Bem-vindo ao Trampa Facil</h1>
          <p className="lead">Com o nosso aplicativo de
           busca de trabalho, encontrar o emprego perfeito ficou ainda mais fácil. Basta cadastrar o seu perfil e as suas habilidades, e nós cuidamos do resto. Não perca mais tempo procurando em vários sites diferentes, tudo o que você precisa está aqui.</p>
          <button type="button" 
          className="btn btn-primary bg-light">Começar agora</button>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/600x400" 
          alt="Ilustração do aplicativo" />
        </div>
      </div>
    </div>
    )
}



export default Home;
import React from "react";
import JobCard from "../../components/JobCard";
import './style.scss';
import Avatar from '@mui/material/Avatar';


const Perfil = () => {

  return (
    <>
      <div className="container card text-white bg-secondary mb-3 mt-3">
        <div className="row card-header">
          <div className="col-md-3 card-body">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <div className="col-md-9">
            <h1 className="card-title">Nome: Alan Carlos</h1>
            <p className="card-text">Atividade: programador</p>
            <p className="card-text">Local: testet testet teste</p>
            <p className="card-text">Descrição: </p>
            <p>Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
              Aut sit perspiciatis dicta porro
              veritatis inventore reprehenderit
              laborum quia. Voluptatibus sed tempora
              iure ipsum eveniet modi consequatur
              blanditiis aspernatur quis tenetur!
            </p>
            <p className="card-text">Experiencias: </p>
            <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Provident adipisci 
            quaerat excepturi reiciendis doloribus 
            inventore necessitatibus debitis, hic, 
            laudantium molestiae vero libero eos! 
            Earum repellendus enim magnam voluptas 
            dicta consectetur.
            </p>
            <p className="card-text">Oque procura: </p>
            <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Provident adipisci 
            quaerat excepturi reiciendis doloribus 
            inventore necessitatibus debitis, hic, 
            laudantium molestiae vero libero eos! 
            Earum repellendus enim magnam voluptas 
            dicta consectetur.
            </p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Contatos</h5>
            <p className="card-text">
              <strong>E-mail:</strong> <span>exemplo@email.com</span>
                </p>
                <strong>Telefone:</strong> <span>(00) 0 0000-0000</span>
              </div>
          </div>
        </div>
      </>
      )
}


      export default Perfil;
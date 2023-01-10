import React from "react";
import JobCard from "../../components/JobCard";
import './style.scss';


declare var $: any;

function Trabalhos() {

    window.onload = function () {
        const element = document.querySelector('.container') as HTMLElement;
        element.classList.add('fade-in');
    };

   
    return (
        <div className="container animated fadeInUp">
            <div className="col p-2">
                <JobCard {...{
                    id: 1,
                    titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>

            <div className="col p-2">
                <JobCard {...{
                    id: 1,
                    titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>
            <div className="col p-2">
                <JobCard {...{
                    id: 1,
                    titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>
            <div className="col p-2">
                <JobCard {...{
                    id: 1,
                    titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>
            <div className="col p-2">
                <JobCard {...{
                    id: 1,
                    titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>
            <div className="col p-2">
                <JobCard {...{
                    id: 1,
                    titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>

        </div>
    );
}


export default Trabalhos;
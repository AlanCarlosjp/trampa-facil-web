import React from "react";
import JobCard from "../../components/JobCard";
import './style.scss';


const Trabalhos = () => {

    return (
        <div className="container">
            <div className="col p-2">
                <JobCard {...{
                    id: 1
                    , titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>

            <div className="col p-2">
                <JobCard {...{
                    id: 1
                    , titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>
            <div className="col p-2">
                <JobCard {...{
                    id: 1
                    , titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>
            <div className="col p-2">
                <JobCard {...{
                    id: 1
                    , titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>
            <div className="col p-2">
                <JobCard {...{
                    id: 1
                    , titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>
            <div className="col p-2">
                <JobCard {...{
                    id: 1
                    , titulo: "teste",
                    descricao: "testetetetett"
                }} />
            </div>

        </div>
    )
}


export default Trabalhos;
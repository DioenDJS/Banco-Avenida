import React, {useState, useEffect, useRef} from 'react';
import TableClients from './TableClients';
import Form from './Form';

const Main = () =>{

    useEffect(() => {
        setLista(localStorage.getItem("clientes")? JSON.parse(localStorage.getItem("clientes")):[])
       
    }, []);

    const atualizaLista = (dados) => {
        setLista(dados);
    }

    const [lista, setLista] = useState([]);

    return(
        <div className="row">
            <div className="col-sm-9 mt-2">
                <Form atualiza={atualizaLista} lista={lista}/>

                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Nome: </th>
                        <th>Idade: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lista.map(clientes =>{
                                return(
                                    TableClients(clientes)
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            <div className="controller col-sm-3">
                <button type="button" className="col-sm-5 mr-1 btn btn-success" >Atendimento Normal</button>
                <button type="button" className="col-sm-5 btn btn-success" >Atendimento Preferencial </button>     
            </div>
        </div>
    )
}
export default Main;

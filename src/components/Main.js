import React, {useState, useEffect, useRef} from 'react';
import TableClients from './TableClients';
import Form from './Form';

const Main = () =>{
    const [lista, setLista] = useState([]);
    const [ tipoAtendimento , setTipoAtendimento ] = useState("");
    const [ clienteEmAtendimento, setclienteEmAtendimento ] = useState("");
    const [ naoHaCliente, setNaoHaCliente ] = useState("");
    const [ painel, setPainel ] = useState(true);

    useEffect(() => {
        setLista(localStorage.getItem("clientes")? JSON.parse(localStorage.getItem("clientes")):[])
       
    }, []);

    const atualizaLista = (dados) => {
        setLista(dados);
    }

    const handlePreferentialService = () =>{
        const clientes = JSON.parse(localStorage.getItem("clientes"));

        const emAtendimneto = clientes.find(item => item.idade >= 60)

        if(!emAtendimneto){
            setNaoHaCliente(" Preferencial ")
            setPainel(false);
            return
        }
        const clientes2 = clientes.filter( item => item.id !== emAtendimneto.id);

        setclienteEmAtendimento(emAtendimneto.nome)
        setTipoAtendimento(" Preferencial ");

        //atualiza o localStorage com os dados de carros2
        localStorage.setItem("clientes", JSON.stringify(clientes2));

        // atualiza a lista
        atualizaLista(clientes2);
    }

    const handleNormalService = () => {
        // const emAtendimneto = lista.find(item => item.idade < 60)

        const clientes = JSON.parse(localStorage.getItem("clientes"));

        const emAtendimneto = clientes.find(item => item.idade < 60)

        if(!emAtendimneto){
            setNaoHaCliente(" Normal ")
            setPainel(false);
            return
        }
        const clientes2 = clientes.filter( item => item.id !== emAtendimneto.id);

        setclienteEmAtendimento(emAtendimneto.nome)
        setTipoAtendimento(" Normal ");

        //atualiza o localStorage com os dados de carros2
        localStorage.setItem("clientes", JSON.stringify(clientes2));

        // atualiza a lista
        atualizaLista(clientes2);
        
 
        // pode-se limpar cada campo 
    
        console.log(emAtendimneto);
    }

    return(
        <div className="row">
            <div className="col-sm-9 mt-2">
                <Form atualiza={atualizaLista} lista={lista}/>

                <table className="table table-striped mt-3 ml-3">
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
            <div className="col-sm-12 mx-auto mb-3">
                <img 
                    src="../banco.jpg"
                    alt="Revenda herbie"
                    className="img-fluid mx-auto d=block"
                />
            </div>
                <button type="button" className="col-sm-5 mr-1 btn btn-success" onClick={handleNormalService}>Atendimento Normal</button>
                <button type="button" className="col-sm-5 ml-4 btn btn-danger" onClick={handlePreferentialService} >Atendimento Preferencial </button>  
                {
                    (painel) ?(
                        <>    
                            <h3>{`Atendimento: ${tipoAtendimento}`}</h3> 
                            <h2>{`Nome: ${clienteEmAtendimento}`}</h2>  
                        </>
                   ):(

                       <h3>{`Não há clientes na fila ${naoHaCliente}`}</h3>
                   )
                }
            </div>
        </div>
    )
}
export default Main;

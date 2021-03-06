import React from 'react';
import { useForm} from "react-hook-form";
import { NotificationContainer } from 'react-notifications';
import MessageErros from './MessageErros';
import NotificationsSend from "./NotificationsSend";

import 'react-notifications/lib/notifications.css';
const Form = ({atualiza, lista}, ref) =>{
    const ano_atual = new Date().getFullYear();
    const { register, handleSubmit, formState: {errors}, setValue } = useForm()

    // const [ chamaAtendimentoPreferencial , setChamaAtendimentoPreferencial ] = useState(true);

    const onSubmit = data => {

        const anoCliente = Number(data.dataDeAniversario.split("-", 1));

        if((ano_atual -  anoCliente) >= 60  ){

            data.preferencial = true 
            data.idade = Number(ano_atual) -  Number(data.dataDeAniversario.split("-", 1))
        }else{
            data.idade = Number(ano_atual) -  Number(data.dataDeAniversario.split("-", 1))
            data.preferencial = false;
        }
        
         data.id = new Date().getTime()

            
        const clientes = localStorage.getItem("clientes")? JSON.parse(localStorage.getItem("clientes")):"";

        localStorage.setItem("clientes", JSON.stringify([...clientes, data]));

        atualiza([...lista, data]);

        setValue("nome","");
        setValue("dataDeAniversario","");

        NotificationsSend("success", "Atenção!", "Cliente cadastrado !");
    }

    // setChamaAtendimentoPreferencial(register.dataDeAniversario.target.current)
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend ml-3">
                            <span className="input-group-text">Nome:</span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            {...register("nome",{
                                required:true,
                                minLength:2,
                                maxLength:30,
                            })}
                            autoFocus
                        />
                         <div className="input-group-prepend ml-3">
                            <span className="input-group-text">Ano-De-Nascimento:</span>
                        </div>
                        <input 
                            type="date" 
                            className="form-control" 
                            {...register("dataDeAniversario",{
                                required:true,
                                
                            })}
                            autoFocus
                        />
                    </div>
                    <div className="input-group-append ml-3">
                            <input 
                                type="submit"
                                className="btn btn-warning"
                                value="Ficha"
                            />
                          
                        </div>    
                        <MessageErros errors={errors} ano_atual={ano_atual}/>
                        <NotificationContainer />
        </form>
    )
};
export default Form;

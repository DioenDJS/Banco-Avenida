import React from 'react';

const MessageErros = ({errors}, ano_atual) =>{
    return(
        <div
        className={
            (errors.nome || errors.dataDeAniversario) && "alert alert-danger"
        }
    >
        {errors.nome && (
            <span>Nome deve ser preenchido (ate 30 caracteres);</span>
        )}
        {errors.dataDeAniversario && (
            <span>
                Ano de aniversário deve ser preenchido (entre {ano_atual - 130} e {ano_atual - 18});
            </span>
        )}
        
    </div>
    )
};
export default MessageErros;
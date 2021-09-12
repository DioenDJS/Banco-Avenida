import React from "react";

const TableClients = (props) =>{
    return(
        <tr 
            key={props.id} 
            data-id={props.id}
        >
            <td>{props.nome}</td>
            <td>{props.idade}</td>
        </tr>
    )
}
export default TableClients;
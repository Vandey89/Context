import { useNavigate } from "react-router-dom"
import { CardContainer } from "../components/containers"
import { useContext } from "react";
import { TodoContext } from "../contex";


export const DealCard =( {deal} ) => {
    const { onEdit, onRemove }  = useContext(TodoContext); 
    const navigate = useNavigate();
    return(
        <CardContainer>
            
            <input 
            type="checkbox"
            defaultChecked={deal.status}
            onChange={(e) => onEdit(...deal,e.target.checked)}
            />
            <span>{deal.text}</span>
            <button onClick={() => onRemove(deal.id)}> Remove </button>
            <button onClick={() => navigate(`/form/${deal.id}`) }>go to edit</button>
        </CardContainer>
    )
}
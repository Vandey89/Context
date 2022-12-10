import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';               //importiruem parametri iz "react-router-dom"
import { FullContainer } from '../components/containers';   //importiruem iz containers i teper' ojno ispolzovat' ego v ka4estve obvertki
import { Form, TextArea } from '../components/forms' ;         //import 'TextArea' i 'Form'
import { TodoContext } from '../contex';


export const FormDeal = () =>{                      //delaem export komponenta (on budet funkcional'nm komponentom)
const  {id = ''} = useParams() ;                    //budem s4itivat' app.jsx(12:20)
const navigate = useNavigate();
const [text, setText] = useState();
const { onAddDeal, deals, onEdit }  = useContext(TodoContext);      //ispolzovali destrukturizaciu  N41

useEffect(() => {
    try{
        if(id){
            const {text} = deals.find((deal) => deal.id === id);
            setText(text);
        }
    }catch(_)  {} //ina4e catch( delali zaglushku)

}, []
);


    const onSave = (e) =>{                           //sozdali sobitie dlya  save
        e.preventDefault();
        console.log(text);
       //onAddDeal(text);
       navigate("/");
        
    };
    const onUpdate = (e) =>{
        //e.preventDefault(); //nada uto4nit'
        onEdit({id, text})
        onAddDeal(text);
        navigate('/')
    }

    const onInput = (e) =>{
        e.preventDefault();
        setText(e.target.value);
        
    };
    
return(
  
    <FullContainer>
        
        
        <Form onSubmit={id ? onUpdate : onSave}>
            <TextArea value={text} onInput={onInput}/>
            <br />
            <button>Save</button>
        </Form>
    
    </FullContainer>
    
    
    
)
} ;
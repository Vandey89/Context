import React, { useState, useContext } from 'react';
import { TodoContext } from '../contex';
import { FullContainer } from '../components/containers';
import { List } from '../components/containers'
import { DealCard } from '../components/dealCard';


export const Deals = () =>{

    const { deals }  = useContext(TodoContext); 
 return (

    
    <FullContainer>
    <List>
        {deals.map((deal) => {           //pereberem vse nashi zna4eniya i vernem
        return <DealCard 
        key={deal.id} 
        deal={deal} 
        
        />;
        })}
        </List>
    </FullContainer>
   
 );  
};
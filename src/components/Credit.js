import React, { Component } from 'react';

const Credit = (props) => {
    return (


            <div>
                <h4>Credit Summary</h4>
                <p>Description: {props.description}</p>
                <p>Amount: {props.amount}</p>
                <p>Date: {props.date}</p>
                <p>ID: {props.id}</p>
            </div>
    
            )
}


export default Credit;



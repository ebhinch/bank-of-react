import React, { Component } from 'react';

const Debit = (props) => {
    return (
        <div>
           

            <div>
                <h4>Debit Summary</h4>
                <p>Description: {props.description}</p>
                <p>Amount: {props.amount}</p>
                <p>Date: {props.date}</p>
                <p>ID: {props.id}</p>
            </div>
        </div>
            )
}


export default Debit;

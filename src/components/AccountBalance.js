// src/components/AccountBalance.js

import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom"


class AccountBalance extends Component {

    calculateAccountBalance = () => {
        //find credit total
        const creditTotal = this.props.credits.reduce((accumulator, credit) => {
            return accumulator + credit.amount
        }, 0)

        //find debit total
        const debitTotal = this.props.debits.reduce((accumulator, debit) => {
            return accumulator + debit.amount
        }, 0)

        //calculate difference
        return creditTotal - debitTotal

        // const accountBalance = creditTotal - debitTotal
    };


    render() {
        const accountBalance = this.calculateAccountBalance()
        return (
            <div>
                <div>Account Balance</div>
                <br /> <br />
                <div>Your account balance is: {accountBalance.toFixed(2)}</div>
            </div>
        );

    }
}

export default AccountBalance;
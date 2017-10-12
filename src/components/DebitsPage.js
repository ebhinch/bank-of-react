import React from "react";
import DebitList from "./DebitList"
import AccountBalance from "./AccountBalance"

const DebitsPage = (props) => {
    return (
        <DebitsList debits={props.debits} />
    )
}

export default DebitsPage
import React, { Component } from 'react';

class NewDebitForm extends Component {

    constructor(props) {
        super(props)

        this.defaultState = {
            newDebit: {
                amount: null, 
                description: "",
                date: Date.now()

            }
        }


        this.state = { ...this.defaultState }
    }

    handleInputChange = (event) => {
        const input = event.target.name;
        let value = event.target.value;

        if (input === "amount") {
            value = Number(value)
        }

        const newDebit = { ...this.state.newDebit };
        newDebit[input] = value;

        this.setState({ newDebit });

    };

    resetForm = () => {
        const newDebit = { ...this.defaultState.newDebit };
        this.setState({ newDebit });
    }

    addNewDebit = (event) => {
        event.preventDefault();
        this.props.addNewDebit(this.state.newDebit);
        this.resetForm();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addNewDebit}>
                    <h3>Amount: </h3>
                    <input
                        type="number"
                        name="amount"
                        placeholder="amount"
                        value={this.state.newDebit.amount}
                        onChange={this.handleInputChange}
                    />

                    <h3>Description: </h3>
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={this.state.newDebit.description}
                        onChange={this.handleInputChange}
                    />
                    <div>
                        <input
                            type="submit"
                            value="Add Debit"
                        />
                    </div>

                </form>
            </div>
        )
    }


}

export default NewDebitForm;
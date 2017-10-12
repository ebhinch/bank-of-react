import React, { Component } from 'react';

class NewCreditForm extends Component {

    constructor(props) {
        super(props)

        this.defaultState = {
            newCredit: {
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

        const newCredit = { ...this.state.newCredit };
        newCredit[input] = value;

        this.setState({ newCredit });

    };

    resetForm = () => {
        const newCredit = { ...this.defaultState.newCredit };
        this.setState({ newCredit });
    }

    addNewCredit = (event) => {
        event.preventDefault();
        this.props.addNewCredit(this.state.newCredit);
        this.resetForm();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addNewCredit}>
                    <h3>Amount: </h3>
                    <input
                        type="number"
                        name="amount"
                        placeholder="amount"
                        value={this.state.newCredit.amount}
                        onChange={this.handleInputChange}
                    />

                    <h3>Description: </h3>
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={this.state.newCredit.description}
                        onChange={this.handleInputChange}
                    />
                    <div>
                        <input
                            type="submit"
                            value="Add Credit"
                        />
                    </div>

                </form>
            </div>
        )
    }


}

export default NewCreditForm;
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import NavBar from './NavBar'
import Route from './Route'
import Booth from './Booth'
import Category from './Category'
import Total from './Total'
import Submit from './Submit'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dirty: false,
            inputValid: false,
            cats: ['Subs','Chips','Drinks']
        };
        // this.handleInput = this.handleInput.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        // let inputVal = event.target.value;
        let inputVal = 'remove later'
        let valid = false;
        if (inputVal.length <= 16 && inputVal.length > 0) {
            valid = true;
        }
        this.setState({
            name: inputVal,
            dirty: true,
            inputValid: valid,
        });
    }

    render() {
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <NavBar />
                    <Route />
                    <Booth />
                    <Category cats={this.state.cats} />
                    <Total />
                    <button
                        disabled = {false}
                        //disabled={!this.state.inputValid}
                        type="submit" className="btn btn-success">Submit Order
                    </button>
                </form>
            </div>
        );
    }
}

export default Main;
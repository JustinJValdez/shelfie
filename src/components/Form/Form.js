import React, { Component } from 'react';
import axios from "axios";


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            productName: '',
            price: 0
        };
        this.handleChange = this.handleChange.bind(this)
        this.cancel = this.cancel.bind(this)
        this.post=this.post.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    cancel() {
        this.setState({
            url: '',
            productName: '',
            price: 0
        })
    }

    post() {
        axios.post(`/api/product`, {
            name: this.state.productName,
            price: this.state.price,
            url: this.state.url
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };


    render() {
        return (
            <div>
                <img src="none" alt="" />
                <br />
                URL:
                <br />
                <input value={this.state.url} onChange={this.handleChange} name="url" />
                <br />
                Product Name:
                <br />
                <input value={this.state.productName} onChange={this.handleChange} name="productName" />
                <br />
                Price:
                <br />
                <input value={this.state.price} onChange={this.handleChange} name="price" />
                <br />
                <button onClick={this.cancel} >Cancel</button> <button onClick={this.post}>Add to Inventory</button>
            </div>

        )
    }
}

export default Form;
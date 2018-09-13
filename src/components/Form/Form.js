import React, {Component} from 'react';

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
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    }
    cancel(){
        this.setState({
            url:'',
            productName:'',
            price:0
        })
    }
    
    render() {
        return (
            <div>
               <img src="none" alt=""/>
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
                <button onClick={this.cancel} >Cancel</button> <button>Add to Inventory</button>
            </div>
            
        )
    }
}

export default Form;
import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    
    render() {
        const inventory=this.props.inventory.map((item)=>{
            return(
                <Product 
                img={item.img}
                name={item.name}
                price={item.price}
                />
            )
        })
        return (

            <div>
                
                <Product />
            </div>

        )
    }

}
export default Dashboard;
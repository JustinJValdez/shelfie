import React from 'react';

function Product(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <img src={props.url} alt=""/>
        </div>
    )
}
export default Product;
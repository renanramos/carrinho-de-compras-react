import React from 'react';
import { Link } from 'react-router-dom';

export const ProductItem = ({ product }) => (
    <div className="product-item">
        <img src={require(`../assets/images/${product.image}`)} alt={product.name}/>
        <div class="divider"></div>
        <h3>{product.name}</h3>
        <span className="product-price">
            <label>Price:</label>
            R$ {product.price}
        </span>

        <p><Link to={`/product/${product.id}`}>Details</Link></p>
    </div>
)
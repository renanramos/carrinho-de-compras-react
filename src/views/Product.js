import React, { Component } from 'react';
import { Products } from '../api/Products';
import './Products.css';
import { addToCart } from "../actions/index";
import { connect } from 'react-redux';

class ProductComponent extends Component {

    state = {
        product: {}
    }

    async componentWillMount() {
        const product = await Products.getProductsById(this.props.match.params.id);
        this.setState({ product })
    }

    render() {
        return (
            <div className="product-page">
                <div className="product-view-item">
                    {this.state.product.image &&
                        <img width="400" height="350" src={require(`../assets/images/${this.state.product.image}`)} alt="" />}
                    <h3>{this.state.product.name}</h3>
                    <span className="product-prive">
                        <b>Price: </b>
                        R$ {this.state.product.price}
                    </span>
                    <p>{this.state.product.description}</p>
                    <button onClick={() => this.props.addToCart(this.state.product)}>Add to cart</button>
                </div>
            </div>
        )
    }
}

export const Product = connect(
    undefined,
    { addToCart }
)(ProductComponent)
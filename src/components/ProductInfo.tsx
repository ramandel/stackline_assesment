import React from "react";
import { Product } from "../assets/product_data.model";

interface Props {
    product: Product
}

function ProductInfo({product}: Props) {

    return (
        <div className='Left-Container'>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <div className="product-subTitle">{product.subtitle}</div>
            <br />
            <div className="product-tags">
            {product.tags.map(tag => (
                <div key={tag} className="tag">{tag}</div>
            ))}
            </div>
        </div>
    );
}

export default ProductInfo;
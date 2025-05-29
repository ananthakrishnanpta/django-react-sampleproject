import React from "react";

// component in React is just a JS function which returns JSX

const ProductCard = ({product}) => {
    console.log(product);
    return (
        <div className="col-md-4">
            <div className="card bg-dark text-light">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">
                        Title : {product.name}
                    </h5>
                    <p className="card-text">
                        &#8377;.{product.price}
                    </p>
                    <button className="btn btn-primary">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

import React, {useEffect, useState} from "react";

export const Product = () => {
    const [products, setProducts] = useState<Array<any>>([]);
    console.log("Product: load");

    useEffect(() => {
        console.log("Product: effect");
        setProducts([
            {name: "product 1"},
            {name: "product 2"}
        ]);
    }, []);
    return (
        <div>
            <h3 className="product-title" data-testid="product-title">
                test
            </h3>
            <div className="" data-testid="products">
                {products && products.length > 0 && products.map((p, index) => (
                    <p key={`product_${index}`} data-testid="products-item">{p.name}</p>
                ))}
            </div>
        </div>
    );
};

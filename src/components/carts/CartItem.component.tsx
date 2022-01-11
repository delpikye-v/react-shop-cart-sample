import React from "react";
import Button from "@material-ui/core/Button";
import { Product } from "../products/Product.model";

import { Wrapper } from "./CartItem.styled";

type Props = {
    item: Product;
    addToCart: (clickedItem: Product) => void;
    removeFromCart: (id: number) => void;
};

const CartItemComponent: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p style={{ color: 'blue' }}>Price: ${item.price}</p>
                <p style={{ color: 'blue' }}>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button size="small" disableElevation onClick={() => removeFromCart(item.id)}>
                    -
                </Button>
                <p>{item.amount}</p>
                <Button size="small" disableElevation onClick={() => addToCart(item)}>
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);

export default CartItemComponent;

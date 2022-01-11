import React from "react";

// node lib
import { Badge } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { useProductContext } from "../context/Product.context"
import { Product } from "./products/Product.model";

import { StyledButton } from "./ButtonCart.styled";

const ButtonCartComponent: React.FC = () => {
    const { setShowCart, listProduct } =  useProductContext()
    const getTotalItems = (items: Product[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

    return (
        <StyledButton onClick={() => setShowCart(true)}>
            <Badge badgeContent={getTotalItems(listProduct)} color="error">
                <AddShoppingCartIcon />
            </Badge>
        </StyledButton>
    );
};

export default ButtonCartComponent;

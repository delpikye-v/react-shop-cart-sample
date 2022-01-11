import Drawer from "@material-ui/core/Drawer/Drawer";
import { Product } from "../products/Product.model";

import { Wrapper } from "./Cart.styled";
import CartItemComponent from "./CartItem.component";

import { useProductContext } from "../../context/Product.context";

const CartComponent: React.FC = () => {
    const {
        isShowCart,
        setShowCart,
        listProduct,
        addToCart,
        removeFromCart
    } = useProductContext();

    const calculateTotal = (items: Product[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <Drawer
            anchor="right"
            open={isShowCart}
            onClose={() => setShowCart(false)}
        >
            <Wrapper>
                <h2>Your Shopping Cart</h2>
                {listProduct.length === 0 ? <p>Please choose a product.</p> : null}

                {listProduct.map((item) => (
                    <CartItemComponent
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                ))}
                <h2>Total: ${calculateTotal(listProduct).toFixed(2)}</h2>
            </Wrapper>
        </Drawer>
    );
};

export default CartComponent;

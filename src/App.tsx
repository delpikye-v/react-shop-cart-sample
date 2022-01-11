import ProductsComponent from "./components/products/Products.component";
// import ButtonCartComponent from "./components/ButtonCart.component";
import ProductContext from "./context/Product.context";
import CartComponent from "./components/carts/Cart.component";

import { Wrapper } from "./App.styles";

const App = () => {
    return (
        <Wrapper>
            <ProductContext>
                <CartComponent />
                {/* <ButtonCartComponent /> */}
                <ProductsComponent />
            </ProductContext>
        </Wrapper>
    );
};

export default App;

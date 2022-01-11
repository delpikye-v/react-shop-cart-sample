import Button from "@material-ui/core/Button";
import { useProductContext } from "../../context/Product.context";

// local
import { Product } from "./Product.model";
import { StyledProductItem } from "./ProductItem.styled";

type Props = {
    item: Product;
};

const ProductItemComponent: React.FC<Props> = ({ item }) => {
    const { addToCart } =  useProductContext()

    return (
        <StyledProductItem>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => addToCart(item)}>Add to cart</Button>
        </StyledProductItem>
    )
};

export default ProductItemComponent;

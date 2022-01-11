import { createContext, useContext, useState } from "react";

import { Product } from "../components/products/Product.model";

interface ContextType {
    isShowCart: boolean,
    setShowCart: (show: boolean) => void,
    listProduct: Product[], // Array<Product>
    setListProduct: (list: Product[]) => void
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
}

const contextDefaultValues: ContextType = {
    isShowCart: false,
    setShowCart: () => {},
    listProduct: [],
    setListProduct: () => {},
    addToCart: () => {},
    removeFromCart: () => {}
};

const Context = createContext<ContextType>(contextDefaultValues)
export const useProductContext = () => useContext(Context)

const ProductContext : React.FC = ({ children }) => {
    const [listProduct, setListProduct] = useState<Product[]>(contextDefaultValues.listProduct)
    const [isShowCart, setShowCart] = useState(false)

    const addToCart = (product: Product) => {
        let index = listProduct.findIndex(item => item.id === product.id)
        if (index >= 0) {
            listProduct[index].amount++
            setListProduct([...listProduct])
            return
        }
        setListProduct([...listProduct, {...product, amount: 1}])
    };

    const removeFromCart = (id: number) => {
        let index = listProduct.findIndex(item => item.id === id)
        if (index >= 0) {
            let amount = listProduct[index].amount - 1
            if (amount <= 0) {
                let newProduct = [...listProduct]
                newProduct.splice(index, 1)
                setListProduct([...newProduct])
                return
            }
            listProduct[index].amount = amount
            setListProduct([...listProduct])
        }
      };

    return (
        <Context.Provider
            value = {{
                isShowCart,
                setShowCart,
                listProduct,
                setListProduct,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ProductContext


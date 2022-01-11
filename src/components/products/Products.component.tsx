import React from "react";
import { useQuery } from "react-query";

import Grid from "@material-ui/core/Grid";
import { LinearProgress } from "@material-ui/core";
import ButtonCartComponent from "../ButtonCart.component";

import ProductItemComponent from "./ProductItem.component";
import { getProducts } from "./Product.service";
import { Product } from "./Product.model";

const ProductsComponent: React.FC = () => {
    const { data = [], isLoading, error } = useQuery<Product[]>("products", getProducts);

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong ...</div>;

    return (
        <>
            <ButtonCartComponent />
            <Grid container spacing={3}>
                {data.map((item) => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <ProductItemComponent item={item} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProductsComponent;

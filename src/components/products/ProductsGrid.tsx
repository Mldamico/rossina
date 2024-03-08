import React from "react";
import { ProductsGridItem } from "./ProductsGridItems";

type Props = {
  products: any[];
};

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductsGridItem product={product} key={product.slug} />
      ))}
    </div>
  );
};

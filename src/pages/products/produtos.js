import React from "react";
import { productData } from "../../components/Products/data";
import Products from "../../components/Products/index";

const Produtos = () => {
  return <Products heading="Nossos produtos" data={productData} />;
};

export default Produtos;

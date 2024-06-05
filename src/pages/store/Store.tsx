import React, { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { Products } from "../../types/servers";

function Store() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      console.log(result);
      setProducts(result);
    });
  }, []);
  console.log(products)

  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدیدترین محصولات</h1>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((item) => (
<<<<<<< HEAD
            <Link to={`/product/${1}`}>
=======
            <Link to={`/product/${item.id}`}>
>>>>>>> 267ff6421c9cc5bee583b68e959e1b92156781b2
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;

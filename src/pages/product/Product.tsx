import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const params = useParams<{id: string}>();
  const [product, setProduct] = useState<IProduct>()

  const {getProductQty, handleDecreaseProductQty, handleIncreaseProductQty, cartItems} = useShoppingCartContext();

  useEffect(()=>{
    getProduct(params.id as string).then(data=> {
      setProduct(data)
    })
  }, [])

  console.log(cartItems)

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h1 className="text-right">{product?.title}</h1>
            <div>
              <p className="text-right">قیمت: {product?.price}$</p>
              <p className="text-right">{product?.description}</p>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-blue-200">
            <img
              className="rounded"
              src={product?.image}
              alt=""
            />

            {/*Increase */}
            <Button onClick={()=> handleIncreaseProductQty(parseInt(params.id as string))} className="mt-2 w-full !py-3" variant="primary">Add to Cart</Button>

            {/* qty */}
            {getProductQty(parseInt(params.id as string))}

            {/*Decrease */}
            <Button onClick={()=> handleDecreaseProductQty(parseInt(params.id as string))} className="mt-2 w-full !py-3" variant="primary">-</Button>

            <div>
                
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;

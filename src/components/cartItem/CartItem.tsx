import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img className="rounded w-28" src={product?.image} alt="" />

      <div className="mr-4">
        <h3 className="text-right">{product?.title}</h3>

        <div className="mt-2">
          <Button 
          className="mr-2" 
          variant="danger"
          onClick={()=> handleRemoveProduct(id)}
          >
            Remove
          </Button>
          <Button
            variant="primary"
            onClick={() => handleIncreaseProductQty(id)}
          >
            +
          </Button>

          <span className="mx-2">{qty}</span>

          <Button
            variant="primary"
            onClick={() => handleDecreaseProductQty(id)}
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

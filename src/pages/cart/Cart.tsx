import React from "react";
import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";

function Cart() {
  return (
    <div>
      <Container>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="bg-gray-200 rounded p-6">
            <p className="text-right">قیمت کل: 2,000</p>
            <p className="text-right">تخفیف شما: 200</p>
            <p className="text-right">قیمت نهایی: 800</p>
        </div>

        <Button variant="success" className="mt-2">
            ثبت سفارش
        </Button>

      </Container>
    </div>
  );
}

export default Cart;

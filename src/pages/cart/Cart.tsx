import React from "react";
import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";

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

        <div className="">
            <p>قیمت کل: 2,000</p>
            <p>تخفیف شما: 2,000</p>
            <p>قیمت نهایی: 2,000</p>
        </div>
      </Container>
    </div>
  );
}

export default Cart;

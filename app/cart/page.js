import { age, name } from "./data";
import { Hello } from "./test";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItems />
      <CartItems />
      <CartItems />
      <Hello />
    </div>
  );
}

function CartItems() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

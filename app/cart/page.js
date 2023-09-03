import { age, name } from "./data";
import { Hello } from "./test";

export default function Cart() {
  const cartBox = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItems cartBox={cartBox[0]} />
      <CartItems cartBox={cartBox[1]} />
      <Banner content="롯대" />
      <Banner content="현대" />
      <Button color="red" />
      <Button color="blue" />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content}카드 결제 행사중</h5>;
}

function Button(props) {
  return <div style={{ padding: "20px", background: props.color, width: "30px" }}>버튼</div>;
}

function CartItems(props) {
  return (
    <div className="cart-item">
      <p>{props.cartBox}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

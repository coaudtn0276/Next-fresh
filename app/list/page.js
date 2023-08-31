// import Image from "next/image";
// import Food from "@/public/food0.png";

export default function List() {
  let items = ["Tomatoes", "Pasta", "Coconut"];

  console.log(items[0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {items.map((el, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{el} $40</h4>
          </div>
        );
      })}
    </div>
  );
}

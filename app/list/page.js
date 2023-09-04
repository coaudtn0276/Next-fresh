// import Image from "next/image";
// import Food from "@/public/food0.png";
"use client";

import { useState } from "react";

export default function List() {
  let items = ["Tomatoes", "Pasta", "Coconut"];
  const [count, setCount] = useState([1, 2, 3]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {items.map((el, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{el} $40</h4>
            <span> {count[idx]} </span>
            <button
              onClick={() => {
                const copy = [...count];
                copy[idx]++;
                setCount(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                const copy = [...count];
                copy[idx]--;
                setCount(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

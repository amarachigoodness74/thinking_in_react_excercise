import React from "react";

export default function ProductItems({ product }) {
  return (
    <tr>
      <td className={product.stocked ? "InStockProduct" : "OutOfStockProduct"}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

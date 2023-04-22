import React from "react";
import ProductCategory from "./ProductCategory";
import ProductItems from "./ProductItems";

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductItems product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th className="ColumnTitle">Name</th>
          <th className="ColumnTitle">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

import { products } from "./products";
import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

function App() {
  return (
    <main className="App">
      <FilterableProductTable products={products} />
    </main>
  );
}

export default App;

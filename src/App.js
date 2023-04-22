import { products } from "./products";
import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

function App() {
  return (
    <>
      <header className="AppHeader">
        <h1>A Simple eCommerce App In React</h1>
      </header>
      <main className="App">
        <FilterableProductTable products={products} />
      </main>
    </>
  );
}

export default App;

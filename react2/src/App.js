import Product from "./Product";
import "./App.css"
function App() {
  const product = {
      name: "iPhone13",
      price: "$999",
      inStock: true,
    }
  return (<div className='App'>
    <h1>СТОРІНКА ПРОДУКТУ</h1>
    <Product product={product} />
  </div>);
}

export default App;
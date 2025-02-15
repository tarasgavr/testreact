import Product from "./Product";
import "./App.css"
function App() {
  const data = [
    {
      name: "iPhone13",
      price: "$999",
      inStock: true,
    },
    {
      name: "iPhone14",
      price: "$1499",
      inStock: true,
    },
    {
      name: "iPhone15",
      price: "$1999",
      inStock: false,
    },
  ]
  const list = data.map(item => <Product product={item} />
  )
  return (<div className='App'>
    <h1>СТОРІНКА ПРОДУКТУ</h1>
    {list}
  </div>);
}

export default App;
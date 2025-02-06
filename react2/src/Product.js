import "./Product.css"
function Product({product}) {
  return <div className="product_table">
    <span className="product_name">Назва: {product.name}</span>
    <span className="product_price">Ціна: ${product.price}</span>
    {product.inStock ? <span className="product_exists">Є в наявності</span> : <span className="product_exists-not">Немає в наявності</span>}
  </div>;
}
export default Product;
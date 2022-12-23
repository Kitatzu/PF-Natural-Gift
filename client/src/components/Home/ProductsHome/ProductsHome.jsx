import ProductsCards from "../../ProductsCards/ProductsCards";
import "./ProductsHome.scss";

const ProductsHome = () => {
  return (
    <div className="ProductsHome">
      <div className="ProductsHome-title">
        <h1>Dale un vistazo a nuestros productos</h1>
      </div>
      <div className="Products-cards">
        <ProductsCards/>
        <ProductsCards/>
        <ProductsCards/>
        <ProductsCards/>
        <ProductsCards/>
        <ProductsCards/>
      </div> 
    </div>
  )
}

export default ProductsHome;

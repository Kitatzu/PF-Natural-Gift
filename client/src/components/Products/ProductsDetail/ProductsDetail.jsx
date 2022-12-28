import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getProducts } from "../../../Redux/Thunks/index";
import ProductsHome from "../../Home/ProductsHome/ProductsHome";
import Waves from "../../Waves/Waves";
import Rating from '@mui/material/Rating';
import OutlinedInput from '@mui/material/OutlinedInput';
import NavBar from "../../NavBar/NavBar";
import "./ProductsDetail.scss";

const ProductsDetails = () => {
  const { productsId } = useParams();
  const { products = [] } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filtProduct = products.find((product) => {
    if (product.id === productsId) return product
  })

  return (
    <div>
      <NavBar/>
      <div className="Product-container">
        <div className="Product">        
          <img  className="Product-img" src={filtProduct.imageProduct} alt={filtProduct.name} />
          <div className="Product-info">
            <h2 className="Product-name">{filtProduct.name}</h2>
            <p><span>Precio:</span> ${filtProduct.price}</p>
            <p><span>Categoría:</span> {filtProduct.categories[0].name}</p>
            <p>{filtProduct.description}</p>
            <ul>
              <li>Envíos a toda Argentina</li>
              <li>Compra segura con Paypal</li>
            </ul>
            <Rating 
              className="Product-rating"
              value={Number(filtProduct.rating)}
            />
            <div className="Product-add">
              <form>
                <OutlinedInput
                  type={"number"}
                  inputProps={{ min: 1, max: 10}}
                > 
                </OutlinedInput>
                <button className="Btn-Enviar-Carrito" type="submit">
                  Enviar al carrito <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="Products-more">
      <ProductsHome/>
      </div>
      <Waves/>
    </div>
  )
}

export default ProductsDetails;
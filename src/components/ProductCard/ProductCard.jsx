import { NavLink } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({ product }) {
  const { title, image, id } = product;

  const handleDetails = () => {
    console.log("Hola mundo");
  };

  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt="Image product" className="product__image__src" />
      </div>
      <div className="product__info">
        <h2 className="product__info__title">{title}</h2>
        <nav className="product__info__footer">
          <NavLink to={`/detail/${id}`} className="header__links">
            <button
              className="product__info__footer__btn"
              onClick={handleDetails}
            >
              Details of {id}
            </button>
          </NavLink>
          <div className="product__info__footer__timer">
            <h3>Timer</h3>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ProductCard;

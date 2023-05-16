import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import "./ProductCard.scss";

function ProductCard({ product , forTimer }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const { title, image, id } = product;

  function MyTimer({ expiryTimestamp }) {
    const { seconds, minutes } = useTimer({
      expiryTimestamp,
      onExpire: () => {
        setIsDisabled(!isDisabled);
      },
    });

    return (
      <span>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    );
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + forTimer); // in seconds

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
              type="button"
              className="product__info__footer__btn"
              disabled={isDisabled ? true : false}
            >
              Details
            </button>
          </NavLink>
          <div className="product__info__footer__timer">
            <h3>
              {isDisabled ? "Sold out" : <MyTimer expiryTimestamp={time} />}
            </h3>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ProductCard;

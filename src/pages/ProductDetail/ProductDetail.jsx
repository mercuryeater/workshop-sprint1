import { useLoaderData } from "react-router-dom";
import "./ProductDetail.scss";

function ProductDetail() {
  const { productDetail } = useLoaderData();
  const { title, image, description, rating, category, price } = productDetail;

  return (
    <div className="detail">
      <section className="detail__image">
        <img src={image} alt="Product Image" className="detail__image__src" />
      </section>
      <div className="detail__info">
        <h2 className="detail__info__title">{title}</h2>
        <hr />
        <h3 className="detail__info__category">Category: {category}</h3>
        <hr />
        <h2 className="detail__info__price">${price}</h2>
        <hr />
        <p className="detail__info__description">{description}</p>
        <div className="detail__info__rating">
          <p className="detail__info__rating__rate">{rating.rate}</p>
          <i class="fa-solid fa-star fa-xl star"></i>
          <p className="detail__info__rating__count">{rating.count} ratings</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

export const loaderProductDetail = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  return { productDetail: data };
};

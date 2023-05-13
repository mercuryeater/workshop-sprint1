import { useLoaderData} from "react-router-dom";
import "./ProductDetail.scss"

function ProductDetail() {  
  const {productDetail} = useLoaderData();
  const { title, image, description, rating } = productDetail;

  return (
    <div className="detail">
      <section className="detail__image">
        <img src={image} alt="Product Image" className="detail__image__src" />
      </section>
      <div className="detail__info">
        <h2 className="detail__info__title">{title}</h2>
        <p>{description}</p>
        <p>{rating.rate}</p>
      </div>
    </div>
  );
}

export default ProductDetail;

export const loaderProductDetail = async ({params}) => {
    const {id} = params;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
  
    return { productDetail: data };
  };

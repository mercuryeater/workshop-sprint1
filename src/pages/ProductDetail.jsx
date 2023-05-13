import { useLoaderData} from "react-router-dom";

function ProductDetail() {  
  const {productDetail} = useLoaderData();
  const { title, image } = productDetail;

  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt="Image product" className="product__image__src" />
      </div>
      <div className="product__info">
        <h2 className="product__info__title">{title}</h2>
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

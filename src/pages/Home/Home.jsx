import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.scss";

function Home() {
  const { products } = useLoaderData();
  const evenTime = 60; 
  const oddTime = 180;

  return (
    <div className="products">
      <h1 className="products__title">Products</h1>
      <ul className="products__list">
        {products.map((product, index) => (
          <li className="products__list__item" key={index}>
            {index % 2 === 0 ? (
              <ProductCard product={product} forTimer={oddTime} />
            ) : (
              <ProductCard product={product} forTimer={evenTime} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

export const loaderProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return { products: data };
};

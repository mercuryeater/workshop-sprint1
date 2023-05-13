// import ProductCard from "../components/ProductCard";
import {useLoaderData} from "react-router-dom"

function Home() {
    const { products } = useLoaderData();




    return (
        <div>
        <h1>Esto es Home</h1>
        <ul>
            {products.map((product, index) => {
                <li key={index}>
                    {product.title}
                </li>
            })}
        </ul>
        {/* <ProductCard /> */}
        </div>
    )
}

export default Home;

export const loaderProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();

    return {products: data}
}

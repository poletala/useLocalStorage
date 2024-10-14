import { useFetchMore } from "../hooks/useFetchMore"
import './product-posts.css'

type ProductType = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      count: number;
      rate: number;
    };
    title: string;
  };

export const ProductPosts = () => {
    const URL_PRODUCTS = 'https://fakestoreapi.com/products';

    const {data, error, isLoading, fetchMore, limitFetch} = useFetchMore({ URL: URL_PRODUCTS, limit: 5 });

    return (
        <>
        <h2 style={{textAlign: 'center'}}>useFetchMore</h2>
        <div className="product-list">
            {data.map((item: ProductType) => (
                <div className="product-card" key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <p>Price: {item.price}$</p>
                </div>
            ))}
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            <button className='load-btn' disabled={isLoading || limitFetch >= 10} onClick={fetchMore}>+</button>
        </div>
        </>
    )
}


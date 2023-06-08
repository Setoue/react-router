
import { useParams, Link } from "react-router-dom"


import './Home.css';

import { useFetch } from '../hooks/useFetch';

const Product = () => {

    const { id } = useParams(); //pegar o id da url
    const url = "http://localhost:3000/products/" + id;//concatenar o id com a url, não precisa fazer uma validaçao

    const { data: product, error, loading } = useFetch(url);

    return (
        <div className="products">
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            {product && (<div key={product.id}>
                <h1>{product.name} - R${product.price}</h1>

                {/*Nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informaçoes</Link>
            </div>
            )}
        </div>
    )
}

export default Product
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import '../css/Home.css';

const Home = () => {

    //carregamento de dados

    const url = "http://localhost:3000/products";

    const { data: items, loading, error } = useFetch(url);

    return (
        <>
            <div>Produtos</div>

            {error && <p>{error}</p>}
            <ul className="products">
                {items && (items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name} </h2>
                        <p>R${item.price}</p>

                        {/*Rota dinamica */}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>

                    </li>
                )))}
            </ul >
        </>
    );
}

export default Home
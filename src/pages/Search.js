import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import '../css/Home.css';

const Search = () => {

    const [searchParams] = useSearchParams();
    const url = "http://localhost:3000/products?" + searchParams;
    const { data: items, loading, error } = useFetch(url);


    return (
        <div>
            <h1>Resultados disponiveis</h1>
            {error && <p>{error}</p>}
            <ul className='products'>
                {loading && <p>Carregando...</p>}
                {items && (items.map((item) => (
                    <li key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>{item.price}</h2>

                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                )))
                }
            </ul>

        </div>
    )
}

export default Search
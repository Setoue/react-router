 # Rotas com react.js
 
 <h2> :hammer: Exibindo funcionalidades</h2>
 

https://github.com/Setoue/react-router/assets/79421646/a212a8a5-65de-4d27-b090-5aca964a5afe

  
 <ul>
 <h3> 🛠️ Hooks e Componentes que foram utilizados</h3>
 <li>Rotas dinâmicas</li>

 ```
 import {Link, NavLink} from 'react-router-dom';
 ```
 
 <li>Nested route</li>
 
 ```
 import { useParams } from 'react-router-dom';
 ```
 
 <li>Route query</li>
 
 ```
 import { useNavigate } from 'react-router-dom';
 import { useSearchParams} from 'react-router-dom';
 ```
 
 <li>No match route</li>
 
 <p>Apenas alteração no path do componente <Route></p>
  
 ```
 <Route path="*" element={<NotFound />} /> 
 ```
 
 </ul>
 
 <h2>Criação de Navbar e Search Forms</h2>
 <ul>
  <li>Navbar</li>
  
  <p>Criado com estilos dinâmicos</p>
  
 ```
 <NavLink to="/" className={({ isActive }) => (isActive ? 'esta-ativo' : 'nao-esta-ativo')}>Home</NavLink>
 ```
 
  <li>Search Forms</li>
 
 <p>Foi utilizado o hook 'useNavigate' para fazer query com value do fomrs</p>
 
 ```
  const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/search?q=' + query);

    }
 ```
 
 </ul>
 
 

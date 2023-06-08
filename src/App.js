
import './css/App.css';

//config react router 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; //tem que instalar o react-router-dom

//components
import Navbar from './components/Navbar'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter> {/* Todo componente com elemntos do react-router é preciso colocar dentro do BrowserRouter*/}

        {/*NavBar  */}
        <Navbar /> {/*Colocar o componente que vai ser usado em todas as paginas */}

        {/*Search Form*/}
        <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*Colocar o elemento(pages) e o path(caminho) */}

          {/*Rota dinamica */}
          <Route path="/products/:id" element={<Product />} />

          {/*Nested route */}
          <Route path="/products/:id/info" element={<Info />} />

          {/*Route page Search */}
          <Route path="/search" element={<Search />} />

          {/*No match route */}
          <Route path="*" element={<NotFound />} />

          {/*Redirect */}
          <Route path='/sobre' element={<Navigate to="/about" />} />
          {/*Quando o usuario digitar /sobre na url ele vai ser redirecionado para /about */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

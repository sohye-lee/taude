import './App.css';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/FooterComponent';
import ProductList from './components/ProductList/ProductListComponent';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;

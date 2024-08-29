import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import Header from './components/Header';
import ProductList from './components/ProductList';
import BudgetDisplay from './components/BudgetDisplay';
import Cart from './components/Cart';
import Hamburger from './assets/images/hamburger.jpg';
import Pizza from './assets/images/pizza.jpg';
import Kola from './assets/images/kola.jpeg';
import Salata from './assets/images/salata.jpg';
import Pepperoni from './assets/images/pepperoni.jpeg';
import Supreme from './assets/images/supreme.jpg';
import Sogan from './assets/images/sogan-halkasi.jpg';
import Barbeku from './assets/images/barbeku.jpg';
import Patetes from './assets/images/patates.jpeg';
import Ton from './assets/images/ton.jpg';
import TavukDoner from './assets/images/tavuk-donerr.jpg';
import EtDoner from './assets/images/etdoner.jpg' ;
import Ayran from './assets/images/ayran.jpg' ;
import Mercimek from './assets/images/mercimek.jpg' ;
import Ezogelin from './assets/images/ezogelincorba.jpg' ;

const { Content } = Layout;

// Kategorilere göre ürünleri tanımlama
const products = {
  fastfood: [
    
    { id: 17, name: 'Soğan Halkası', price: 150, image: Sogan },
    { id: 2, name: 'Hamburger', price: 50, image: Hamburger },
    { id: 18, name: 'Patates Kızartması', price: 150, image: Patetes },
    { id: 1, name: 'Alaturka Pizza', price: 150, image: Pizza },
    { id: 13, name: 'Pepperoni Pizza', price: 150, image: Pepperoni  },
    { id: 14, name: 'Supreme Pizza', price: 150, image: Supreme },
    { id: 15, name: 'Barbeku Tavuklu Pizza', price: 150, image: Barbeku },
    { id: 16, name: 'Ton Balıklı Pizza', price: 150, image: Ton },
    
  ],
  doner: [
    { id: 3, name: 'Tavuk Döner', price: 70, image: TavukDoner  },
    { id: 4, name: 'Et Döner', price: 90, image: EtDoner },
  ],
  kebap: [
    { id: 5, name: 'Adana Kebap', price: 120, image: 'adana_kebap_image_url' },
    { id: 6, name: 'Urfa Kebap', price: 110, image: 'urfa_kebap_image_url' },
  ],
  icecekler: [
    { id: 7, name: 'Kola', price: 25, image: Kola },
    { id: 8, name: 'Ayran', price: 15, image: Ayran },
  ],
  corbalar: [
    { id: 9, name: 'Mercimek Çorbası', price: 30, image: Mercimek },
    { id: 10, name: 'Ezogelin Çorbası', price: 35, image: Ezogelin },
  ],
  salatalar: [
    { id: 11, name: 'Çoban Salata', price: 30, image: Salata },
    { id: 12, name: 'Mevsim Salata', price: 35, image: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/1_19_11zon.webp' },
  ]
};

function App() {
  const [budget, setBudget] = useState(500);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('fastfood');

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (budget >= product.price) {
      if (existingProduct) { //Sepetteki ürünleri günceller. Eğer ürünün id'si product.id ile eşleşiyorsa, ürünün miktarını (quantity) 1 artırır.
        setCart(cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }// Sepete yeni ürünü ekler. Yeni ürünün miktarı (quantity) 1 olarak ayarlanır.
            : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      setBudget(budget - product.price);
    } else {
      alert('Yeterli bütçe yok!');
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct.quantity > 1) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== product.id));
    }
    setBudget(budget + product.price);
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Layout>
      <Header onSelectCategory={handleSelectCategory} cartItemCount={cart.length} toggleCart={toggleCart} />
      <Content style={{ padding: '20px' }}>
        <BudgetDisplay budget={budget} />
        <ProductList products={products[selectedCategory]} addToCart={addToCart} />
      </Content>
      <Drawer
        title="Sepet"
        placement="right"
        onClose={toggleCart}
        visible={isCartVisible}
      >
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </Drawer>
    </Layout>
  );
}

export default App;

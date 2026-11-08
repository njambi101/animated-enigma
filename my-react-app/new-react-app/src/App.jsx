import './App.css'
import Navbar from './NavBar'
import Footer from './footer'
import React,{ useState }  from 'react'
import ProductCard from './ProductCard'

const products = [
  { id: 1, title: 'Laptop', category: 'Electronics', price: '$999', image: 'laptop.jpg' },
  { id: 2, title: 'Coffee Maker', category: 'Home Appliances', price: '$49', image: 'coffee-maker.jpg' },
  { id: 3, title: 'Headphones', category: 'Electronics', price: '$199', image: 'headphones.jpg' },
]

function App() {
  const [filter, setFilter] = useState('')
  const filteredProduct = filter ? products.filter((product) => product.category === filter) : products
  
  return (
    <div>
      <h1>ShopEase Product Catelog</h1>
      <button onClick={() => setFilter('Electronics')}>Electronics</button>
      <button onClick={() => setFilter('Home Appliances')}>Home Appliances</button>
      <button onClick={() => setFilter('')}>All</button>

      <div className="product-list">
          {filteredProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
   
}

export default App

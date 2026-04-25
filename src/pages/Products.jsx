import React from 'react';
import { User, RectangleHorizontal, SlidersHorizontal, Trash2, Globe, Clock } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'Camiseta Básica Urban',
    description: 'Algodón 100% orgánico',
    price: 29,
    icon: User,
  },
  {
    id: 2,
    name: 'Jeans Slim Fit',
    description: 'Denim premium stretch',
    price: 89,
    icon: RectangleHorizontal,
  },
  {
    id: 3,
    name: 'Sudadera Oversize',
    description: 'Algodón French Terry',
    price: 65,
    icon: SlidersHorizontal,
  },
  {
    id: 4,
    name: 'Chaqueta Bomber',
    description: 'Nylon resistente al agua',
    price: 120,
    icon: Trash2,
  },
  {
    id: 5,
    name: 'Gorra Snapback',
    description: 'Bordado premium',
    price: 35,
    icon: Globe,
  },
  {
    id: 6,
    name: 'Zapatillas Urban',
    description: 'Suela de goma antideslizante',
    price: 95,
    icon: Clock,
  },
];

function Products() {
  return (
    <main className="products-page">
      <div className="products-page__header">
        <h1 className="products-page__title">Nuestra Colección</h1>
        <p className="products-page__subtitle">Estilo urbano para cada ocasión</p>
      </div>
      <div className="products-page__grid">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            icon={product.icon}
          />
        ))}
      </div>
    </main>
  );
}

export default Products;

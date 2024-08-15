import React, { useState } from 'react';

import P1 from '../assets/img/P1.png';
import P2 from '../assets/img/P2.png';
import P3 from '../assets/img/P3.png';
import P4 from '../assets/img/P4.png';
import P5 from '../assets/img/P5.png';
import P6 from '../assets/img/P6.png';
import P7 from '../assets/img/P7.png';
import P8 from '../assets/img/P8.png';

const allProducts = [
  { id: 1, img: P1, name: 'Product 1', price: '10,000 BDT' },
  { id: 2, img: P2, name: 'Product 2', price: '10,000 BDT' },
  { id: 3, img: P3, name: 'Product 3', price: '10,000 BDT' },
  { id: 4, img: P4, name: 'Product 4', price: '10,000 BDT' },
  { id: 5, img: P5, name: 'Product 5', price: '10,000 BDT' },
  { id: 6, img: P6, name: 'Product 6', price: '10,000 BDT' },
  { id: 7, img: P7, name: 'Product 7', price: '10,000 BDT' },
  { id: 8, img: P8, name: 'Product 8', price: '10,000 BDT' },
];

export default function JustForYou() {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  return (
    <div className="container my-5">
      <h4 className="mb-4">Just For You</h4>
      <div className="row">
        {allProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={product.img} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p style={{ color: 'orange' }}>{product.price}</p>
                <button className="see-all-btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < allProducts.length && (
        <div className="text-center">
          <button onClick={loadMoreProducts} className="load-more-btn">
            Load More
          </button>
        </div>
      )}
    </div>
   
  );
}

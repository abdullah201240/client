import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from '../assets/img/logo.png';
import Categories from './Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { NavLinks } from './NavLinks';
import '../assets/css/product.css';
import img1 from '../assets/img/Rectangle.png';
import P1 from '../assets/img/P1.png';
import P2 from '../assets/img/P2.png';
import P3 from '../assets/img/P3.png';
import P4 from '../assets/img/P4.png';
import P5 from '../assets/img/P5.png';
import P6 from '../assets/img/P6.png';
import P7 from '../assets/img/P7.png';
import P8 from '../assets/img/P8.png';
import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';

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
export default function Product() {
    const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value);
  };

  return (
    <div>
      <Navbar
        phone="+8801896121201"
        email="service@interiobd.com"
        logo={Logo}
        searchPlaceholder="Search for products..."
        navLinks={NavLinks}
        showCartIcon={true}
      />
      <br />
      <div style={{ background: '#F1F1F1' }}>
        <Categories />
        <h6 className=" container">
          <FontAwesomeIcon icon={faHouse} /> Home/Mikasa Ply/Fire Guardian/Burmese teak
        </h6>
        <br></br>
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img src={img1} alt="Product Preview" />
                    </div>
                    <div className="tab-pane" id="pic-2">
                      <video controls height={500}>
                        <source src="/t.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active">
                      <a data-target="#pic-1" data-toggle="tab">
                        <img src={img1} alt="Thumbnail" />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-2" data-toggle="tab">
                        <img src={img1} alt="Thumbnail" />
                      

                      </a>
                    </li>
                  </ul>
                </div>

                <div className="details col-md-6">
                  <h3 className="product-title">Burmese teak</h3>
                  <p style={{ color: 'green' }}>In Stock</p>
                  <p className="product-description">
                    Burma teak is renowned for its superior quality and is widely regarded as the finest variety available. This distinction is attributed to the optimal growing conditions and unique soil composition found in Myanmar's teak forests.
                  </p>
                  <h4 className="price">
                    Current price: <span>10,000 BDT</span>
                  </h4>
                  <div className="quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      className="form-control"
                      style={{ width: '60px', display: 'inline-block', marginLeft: '10px' }}
                    />
                  </div>
                  <div className="action mt-3">
                    <Link to='/user/login' className="add-to-cart btn btn-default" type="button">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="my-4">
      <h4 className="mb-4" style={{ fontWeight: 'bold', borderBottom: '3px solid black', display: 'inline-block' }}>
        Specification
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <td style={{ width: '30%', backgroundColor: '#faeee6', fontWeight: 'bold' }}>Product Name</td>
            <td>Burmese teak</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#faeee6', fontWeight: 'bold' }}>Range</td>
            <td>Mikasa Pristine</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#faeee6', fontWeight: 'bold' }}>Configuration</td>
            <td>1 Strip</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#faeee6', fontWeight: 'bold' }}>Surface Color</td>
            <td>Stained</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#faeee6', fontWeight: 'bold' }}>Surface Texture</td>
            <td>Non Brushed</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#faeee6', fontWeight: 'bold' }}>Thickness MM</td>
            <td>1.5</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#faeee6', fontWeight: 'bold' }}>Core Material</td>
            <td>Pine</td>
          </tr>
        </tbody>
      </Table>
    </Container>







      <div className="container my-5">
      <h4 className="mb-4">Related Product</h4>
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
      <Footer />
    </div>
  );
}

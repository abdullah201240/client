import React from 'react';

import C1 from '../assets/img/C1.jpg';
import C2 from '../assets/img/C2.jpg';
import C3 from '../assets/img/C3.png';
import C4 from '../assets/img/C4.png';
import C5 from '../assets/img/C5.png';
import C6 from '../assets/img/C6.png';
import C7 from '../assets/img/C7.png';
import C8 from '../assets/img/C8.png';
import '../assets/css/categories.css';
import { Link } from 'react-router-dom';

export default function AllCategories() {
    return (
        <div className="container my-5">
            <h4 className="mb-4">Categories</h4>
            <div className="row">
                {[C1, C2, C3, C4, C5, C6, C7, C8].map((image, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card2 h-100">
                            <div className="card2-img-wrapper">
                                <img className="card2-img-top" src={image} alt={`category ${index}`} />
                                <div className="card2-title-overlay">
                                    <h5 className="card2-title">Title {index + 1}</h5>
                                </div>
                            </div>
                            <div className="card2-body">
                                <Link className="see-all-btn" to='/product-category'>See All</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

import React from 'react';

import C1 from '../assets/img/C1.png';
import C2 from '../assets/img/C2.png';
import C3 from '../assets/img/C3.png';
import C4 from '../assets/img/C4.png';
import C5 from '../assets/img/C5.png';
import C6 from '../assets/img/C6.png';
import C7 from '../assets/img/C7.png';
import C8 from '../assets/img/C8.png';
import '../assets/css/categories.css'

export default function AllCategories() {
    return (
        <div className="container my-5">
            <h4 className="mb-4">Categories</h4>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <div className="card h-100">
                        <img className="card-img-top" src={C1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Mikasa Ply</h5>
                            <button className="see-all-btn">See All</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={C2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Mikasa Real wood Floors</h5>
                            <button className="see-all-btn">See All</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={C3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Greenlam Laminates</h5>
                            <button className="see-all-btn">See All</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={C4} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Decorative Lights</h5>
                            <button className="see-all-btn">See All</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={C5} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Floor mat</h5>
                            <button className="see-all-btn">See All</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={C6} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Wall papers</h5>
                            <button className="see-all-btn">See All</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={C7} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Blinds</h5>
                            <button className="see-all-btn">See All</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={C8} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Air Conditioner</h5>
                            <button className="see-all-btn">See All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

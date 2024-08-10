
import Hero01 from '../assets/img/hero01.jpg';
import Hero02 from '../assets/img/hero02.jpg';
import Hero03 from '../assets/img/hero03.jpg';
import Hero04 from '../assets/img/hero04.jpg';
import '../assets/css/slider.css'


export default function HeroSection() {
    return (
        <div>
            <div style={{ background: '#F1F1F1' }}>

                <div className="carousel-container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Hero01} alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <p>Welcome to Interio, your premier destination for stylish and high-quality interior products. Our mission is to help you transform your home into a haven of comfort, beauty, and functionality.</p>
                                    <div className="carousel-button-container">
                                        <button className="btn btn-primary">See More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Hero02} alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <p>Discover a variety of stylish and high-quality interior products. Transform your home into a space that reflects your personality and taste.</p>
                                    <div className="carousel-button-container">
                                        <button className="btn btn-primary">See More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Hero03} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">


                                    <p>Explore our extensive range of products designed to bring comfort and elegance to your home.</p>
                                    <div className="carousel-button-container">
                                        <button className="btn btn-primary">See More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Hero04} alt="Fourth slide" />
                                <div className="carousel-caption d-none d-md-block">


                                    <p>Find the perfect items to enhance your living space and create a haven of tranquility.</p>
                                    <div className="carousel-button-container">
                                        <button className="btn btn-primary">See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <br />
               
                
            </div>

        </div>
    );
}

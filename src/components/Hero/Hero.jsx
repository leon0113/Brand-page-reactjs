import './Hero.css'

const Hero = () => {
    return (
        <main className='hero'>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='hero-btns'>
                    <button>Shop Now</button>
                    <button className='sec-btn'>Category</button>
                </div>
                <div className="available">
                    <p>Also Available On</p>

                    <div className='shop-icons'>
                        <img src="../../../src/assets/amazon.png" alt="amazon" />
                        <img src="../../../src/assets/flipkart.png" alt="flipkart" />
                    </div>
                </div>
            </div>


            <div className="hero-image">
                <img src="../../../src/assets/shoe_image.png" alt="" />
            </div>
        </main>
    );
};

export default Hero;
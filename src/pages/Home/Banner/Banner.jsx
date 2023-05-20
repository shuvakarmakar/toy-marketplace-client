import img1 from '../../../assets/Banner/Toy 1.avif';
import img2 from '../../../assets/Banner/Toy 2.avif';
import img3 from '../../../assets/Banner/Toy 3.avif';
import img4 from '../../../assets/Banner/Toy 4.avif';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                    <div className="text-white text-center space-y-7">
                        <h2 className="text-4xl md:text-6xl font-bold">Educational and Learning Toys</h2>
                        <p>Give children toys that are powered by their imagination, not by batteries.</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                    <div className="text-white text-center space-y-7">
                        <h2 className="text-4xl md:text-6xl font-bold">Educational and Learning Toys</h2>
                        <p>Give children toys that are powered by their imagination, not by batteries.</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                    <div className="text-white text-center space-y-7">
                        <h2 className="text-4xl md:text-6xl font-bold">Educational and Learning Toys</h2>
                        <p>Give children toys that are powered by their imagination, not by batteries.</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
                    <div className="text-white text-center space-y-7">
                        <h2 className="text-4xl md:text-6xl font-bold">Educational and Learning Toys</h2>
                        <p>Give children toys that are powered by their imagination, not by batteries.</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;
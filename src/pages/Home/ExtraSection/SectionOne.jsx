import img from '../../../assets/AboutUs.avif'


const SectionOne = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-12">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-5">
                    <div className="md:w-1/2">
                        <img
                            src={img}
                            alt="About Us"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                        <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
                        <p className="text-white text-lg mb-6">
                            At ABC Learning Toys, we are passionate about providing educational and engaging toys for children.
                        </p>
                        <p className="text-white text-lg mb-6">
                            Our mission is to inspire young minds, foster creativity, and promote learning through play.
                        </p>
                        <p className="text-white text-lg mb-8">
                            With a wide range of toys and games designed to stimulate curiosity and develop essential skills,
                            we strive to make learning enjoyable and accessible for kids of all ages.
                        </p>
                        <button className="bg-white hover:bg-gray-200 text-gray-800 py-2 px-6 rounded-full shadow-lg">
                            Explore Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionOne;
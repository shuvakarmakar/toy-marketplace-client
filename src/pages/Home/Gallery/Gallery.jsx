import img1 from '../../../assets/Gallery/photo1.avif';
import img2 from '../../../assets/Gallery/photo2.avif';
import img3 from '../../../assets/Gallery/photo3.avif';
import img4 from '../../../assets/Gallery/photo4.avif';
import img5 from '../../../assets/Gallery/photo5.avif';
import img6 from '../../../assets/Gallery/photo6.avif';

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div className="container mx-auto py-8" data-aos="flip-down">
            <h2 className="text-4xl text-center font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="relative">
                        <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300">
                            <div className="flex items-center justify-center h-full">
                                <button className="bg-white px-4 py-2 text-gray-800 font-semibold rounded-lg shadow">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

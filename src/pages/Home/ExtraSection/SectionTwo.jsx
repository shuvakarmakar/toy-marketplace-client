
const SectionTwo = () => {
    return (
        <div data-aos="fade-up-right">
            <section className="py-12 bg-gradient-to-r from-purple-500 to-blue-500">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-8">Discover the Possibilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-purple-500 mx-auto mb-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.293 9.293a1 1 0 011.414-1.414l1.414 1.414a1 1 0 01-1.414 1.414L4.293 9.293zM12 13a1 1 0 10-2 0v2a1 1 0 102 0v-2zm0-8a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h3 className="text-xl font-semibold text-purple-500 mb-2">Quality Materials</h3>
                            <p className="text-gray-800">
                                Our products are made from premium materials, carefully crafted to ensure durability and safety for your child.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-purple-500 mx-auto mb-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.707 9.293a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L7.414 11H11a1 1 0 000-2H7.414l2.707-2.707a1 1 0 00-1.414-1.414l-4 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h3 className="text-xl font-semibold text-purple-500 mb-2">Interactive Learning</h3>
                            <p className="text-gray-800">
                                Experience hands-on learning with our interactive toys, designed to engage and inspire curiosity in young minds.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-purple-500 mx-auto mb-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a1 1 0 011-1h6V5a1 1 0 112 0v4h6a1 1 0 110 2h-6v4a1 1 0 11-2 0v-4H5a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h3 className="text-xl font-semibold text-purple-500 mb-2">Endless Fun</h3>
                            <p className="text-gray-800">
                                Let your child's imagination soar with our diverse range of toys, providing endless opportunities for play and creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionTwo;
function Services() {
    return (
        <div className="bg-gray-900 py-10 text-white">
            <h1 className="text-4xl text-center font-bold mb-8">
                My <span className="text-[#ff6d00]">Services</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-16">

                <div className="m-4 p-6 border border-[#ff6d00] rounded-lg shadow-lg w-full md:w-[300px]">
                    <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
                    <p>
                        I create responsive and dynamic websites that provide an exceptional user experience.
                    </p>
                </div>

                <div className="m-4 p-6 border border-[#ff6d00] rounded-lg shadow-lg w-full md:w-[300px]">
                    <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
                    <p>
                        I design user-friendly interfaces that are both aesthetically pleasing and functional.
                    </p>
                </div>

                <div className="m-4 p-6 border border-[#ff6d00] rounded-lg shadow-lg w-full md:w-[300px]">
                    <h2 className="text-2xl font-semibold mb-4">API Development</h2>
                    <p>
                        I build robust and scalable APIs to enhance the functionality of web applications.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Services;

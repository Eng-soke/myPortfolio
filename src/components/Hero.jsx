import soke from "../assets/Soke.png";

function Hero() {
    return (
        <div className="h-[500px] flex items-center justify-evenly my-5"
            style={{
                background: 'linear-gradient(140deg, #1F2937 50%, #ff6d00 50%)' // #1F2937 is the hex for gray-900
            }}
        >
            <div className="text-white w-[300px] ">
                <h1 className="text-4xl font-bold mb-4 ">Hi, I'm <span className="text-[#ff6d00]">Eng Soke</span> </h1>
                <p className="text-xl">A passionate Full Stack Developer building elegant web experiences.</p>
                <button className="bg-[#ff6d00] border-2 border-white px-4 sm:px-8 py-2 rounded m-2">Resume</button>
            </div>
            <div className="w-[400px] h-[500px] rounded-full flex items-center justify-center">
                <img className="w-[300px] h-[500px] object-cover" src={soke} alt="Eng Soke" />
            </div>
        </div>
    );
}

export default Hero;

import eng from "../assets/eng.png";

function About() {
    return (
        <div className="bg-gray-900 sm:h-[460px] h-[972px] text-white relative">
            <h1 className="text-4xl text-center font-bold ">About <span className="text-[#ff6d00] "> Me </span> </h1>
            <div className="sm:flex justify-between px-4 sm:px-16 py-8 sm:py-20">


                <div className="">

                    <img className="absolute mt-[400px] sm:mt-0 sm:-top-10 h-[500px] " src={eng} />
                </div>

                <p className="text-center text-xl sm:w-[600px] w-[350px] ">
                    Hi, I'm <span className="font-bold text-[#ff6d00]">Eng Soke</span>, a passionate Full Stack Developer with a deep love for creating elegant and efficient web applications.
                    I specialize in developing both frontend and backend systems, ensuring that every project I work on is optimized for performance, accessibility, and user experience.
                    My goal is to build solutions that not only meet business needs but also offer seamless interactions for users. Whether it's crafting beautiful user interfaces or designing robust APIs, I am always eager to take on new challenges and grow as a developer.
                </p>

            </div>


        </div>
    );
}

export default About;
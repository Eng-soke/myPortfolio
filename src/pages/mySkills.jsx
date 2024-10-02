function MySkills() {
    return (
        <div className=" my-10 text-center">
            <h1 className="text-4xl font-bold mb-5">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 border border-[#ff6d00] rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Programming Languages</h2>
                    <ul className="list-disc list-inside">
                        <li>   J avaScript</li>
                        <li> CSS </li>
                        <li>HTML </li>
                    </ul>
                </div>
                <div className="p-5 border border-[#ff6d00] rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Frameworks</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                </div>
                <div className="p-5 border border-[#ff6d00] rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Databases</h2>
                    <ul className="list-disc list-inside">
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="p-5 border border-[#ff6d00] rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Tools & Technologies</h2>
                    <ul className="list-disc list-inside">
                        <li>Git </li>
                        <li> GitHub</li>
                    </ul>
                </div>
                <div className="p-5 border border-[#ff6d00] rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">UI/UX Design</h2>
                    <ul className="list-disc list-inside">
                        <li>Figma</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="p-5 border border-[#ff6d00] rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Soft Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>Problem Solving</li>
                        <li>Team Collaboration</li>
                        <li>Effective Communication</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MySkills;

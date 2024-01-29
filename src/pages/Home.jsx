import Main from '../components/Layout/Main';

const Home = () => {
    return (
        <Main>
            <div className="max-w-4xl py-10 px-4">
                <h1 className="text-3xl font-bold mb-4">👋 Hey there! I'm Hammad</h1>
                <p className="text-lg mb-8">
                    Your go-to freelancer for all things MERN stack and React Native development! 💻
                </p>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">About Me:</h2>
                    <p className="text-gray-700">
                        With a passion for crafting seamless web and mobile experiences, I bring expertise in MERN stack (MongoDB, Express.js, React.js, Node.js) and React Native development to the table. 🚀
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Why Choose Me?</h2>
                    <p className="text-gray-700">
                        Experience: With years of hands-on experience, I've honed my skills to deliver high-quality solutions that exceed expectations.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Innovation:</h2>
                    <p className="text-gray-700">
                        I thrive on innovation, constantly exploring new technologies and methodologies to stay ahead of the curve. Your satisfaction is my priority, and I'm committed to delivering solutions that align perfectly with your vision and goals.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Services Offered:</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Web Development (MERN Stack)</li>
                        <li>Mobile App Development (React Native)</li>
                        <li>Custom Solutions Tailored to Your Needs</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Let's Collaborate:</h2>
                    <p className="text-gray-700">
                        Whether you're a startup looking to bring your idea to life or an established business seeking to enhance your digital presence, I'm here to help. Let's collaborate and turn your vision into reality! 💡
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Get in Touch:</h2>
                    <p className="text-gray-700">
                        Ready to kickstart your next project? Reach out to me today, and let's embark on a journey towards success together. 🌟
                    </p>
                </div>

                <p className="font-bold">Let's Build Something Extraordinary! 💪</p>
            </div>
        </Main>
    );
};

export default Home;

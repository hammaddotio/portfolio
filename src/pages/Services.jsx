import Main from '../components/Layout/Main';
import { FaLaptopCode, FaMobileAlt, FaCogs, FaPalette, FaServer, FaBug, FaWrench, FaHeadset } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom'

const Services = () => {
    const navigate = useNavigate()
    return (
        <Main>
            <div className='mx-auto max-w-6xl px-4'>
                <div className='w-[10rem] my-10'>
                    <h1 className='mb-2 text-2xl font-bold uppercase'>Services</h1>
                    <hr className='' />
                </div>
                <div className='my-4'>
                    <h2 className='text-lg font-semibold'>Services Offered:</h2>
                    <ul className='ml-5 list-disc'>
                        <li><FaLaptopCode className='inline mr-2' /> Web Development using the MERN stack.</li>
                        <li><FaMobileAlt className='inline mr-2' /> Mobile App Development using React Native.</li>
                        <li><FaCogs className='inline mr-2' /> Custom Solutions Tailored to Client Needs.</li>
                        <li><FaPalette className='inline mr-2' /> UI/UX Design and Development.</li>
                        <li><FaServer className='inline mr-2' /> API Development and Integration.</li>
                        <li><FaBug className='inline mr-2' /> Testing and Quality Assurance.</li>
                        <li><FaWrench className='inline mr-2' /> Maintenance and Support.</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <h2 className='text-lg font-semibold'>Service Descriptions:</h2>
                    <p>
                        With expertise in the MERN stack and React Native, I offer a range of services to meet your development needs. Whether you need a web application built from scratch, a mobile app for iOS and Android, or custom solutions tailored to your specific requirements, I've got you covered.
                    </p>
                    {/* Add descriptions for each service here */}
                </div>
                <div className='my-4'>
                    <h2 className='text-lg font-semibold'>How It Works:</h2>
                    <p>
                        My development process is designed to be smooth and transparent, from initial consultation to project delivery. I believe in open communication, regular updates, and collaborative decision-making to ensure the success of your project.
                    </p>
                    {/* Add details on how the process works here */}
                </div>
                <div className='my-4'>
                    <h2 className='text-lg font-semibold'>Client Benefits:</h2>
                    <p>
                        By choosing me as your development partner, you'll benefit from my expertise, dedication, and commitment to delivering high-quality solutions. I prioritize your satisfaction and strive to exceed your expectations every step of the way.
                    </p>
                    {/* Add specific benefits for clients here */}
                </div>
                <div className='my-4'>
                    <h2 className='text-lg font-semibold'>Call-to-Action:</h2>
                    <p>
                        Ready to start your next project? Let's discuss how I can help bring your ideas to life. Get in touch today for a free consultation or project estimation.
                    </p>
                    <Button className='my-5' onClick={() => navigate('/contact')}>Contact Me</Button>
                </div>
            </div>
        </Main>
    );
};

export default Services;

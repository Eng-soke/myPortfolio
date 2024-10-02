import { FaFacebook, FaTwitter, FaTiktok, FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'; // Ku dar FaWhatsapp icon

function Footer() {
    return (
        <div className="bg-gray-900 text-white mt-5 py-6 relative w-full">
            <div className="container mx-auto text-center">
                <p className="mb-4">© 2024 Eng Soke. All Rights Reserved.</p>
                <p className="mb-4">For inquiries, contact me on WhatsApp:</p>
                <a href="https://wa.me/2520616739858" target="_blank" rel="noopener noreferrer" className="text-[#ff6d00] font-semibold mb-4 block">
                    +252 0616739858
                </a>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="text-2xl hover:text-[#ff6d00]" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="text-2xl hover:text-[#ff6d00]" />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <FaTiktok className="text-2xl hover:text-[#ff6d00]" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="text-2xl hover:text-[#ff6d00]" />
                    </a>
                </div>
            </div>
            <div className="fixed z-50 bottom-4 right-4 bg-[#25D366] p-2 rounded-full shadow-lg">
                <a href="https://wa.me/2520616739858" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp className="text-3xl text-white" />
                </a>
            </div>
        </div>
    );
} 

export default Footer;

import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#1d1d42] via-[#2d2d70] to-[#1d1d42] text-white px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">JobNest</h2>
                    <p className="text-sm">
                        Empowering job seekers and employers with a seamless experience. Start your career journey today.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-yellow-300 transition-all"><FaFacebookF /></a>
                        <a href="#" className="hover:text-yellow-300 transition-all"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-yellow-300 transition-all"><FaTwitter /></a>
                        <a href="#" className="hover:text-yellow-300 transition-all"><FaInstagram /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Job Listings</a></li>
                        <li><a href="#" className="hover:underline">CV Builder</a></li>
                        <li><a href="#" className="hover:underline">Career Advice</a></li>
                        <li><a href="#" className="hover:underline">Recruitment</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">Jobs</a></li>
                        <li><a href="#" className="hover:underline">Partners</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Terms of Use</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm">
                <p>© {new Date().getFullYear()} JobHunt Pro. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

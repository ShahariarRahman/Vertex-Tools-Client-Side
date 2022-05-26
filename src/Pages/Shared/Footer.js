import React from 'react';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer className="footer footer-center p-4 bg-black text-primary">
            <div>
                <p>Copyright &#169; {currentYear} - All right reserved by Vertex Tools Manufacturing</p>
            </div>
        </footer>
    );
};

export default Footer;
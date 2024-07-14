import React, {useState} from "react";
import { FaPhone, FaUser, FaTh, FaCog, FaSlidersH } from 'react-icons/fa';
import ComingSoonModal from "./Modal/ComingSoonModal";

const Footer = () => {

    const [comingSoonModal, setComingSoonModal] = useState(false);

    const handleComingSoonFeature = () => {
        setComingSoonModal(true);
    }

    return (
        <>
            <footer className="footer-container">
                <div className="icon" onClick={handleComingSoonFeature}><FaPhone/></div>
                <div className="icon" onClick={handleComingSoonFeature}><FaUser/></div>
                <div className="icon" onClick={handleComingSoonFeature}><FaTh/></div>
                <div className="icon" onClick={handleComingSoonFeature}><FaCog/></div>
                <div className="icon" onClick={handleComingSoonFeature}><FaSlidersH/></div>
            </footer>

            <ComingSoonModal
                isVisible={comingSoonModal}
                onClose={() => setComingSoonModal(false)}
            />
        </>
    )
}

export default Footer;
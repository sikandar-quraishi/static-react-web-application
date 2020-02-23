import React from 'react';
import Fade from 'react-reveal/Fade';
import TaskScrollButton from '../Task/TaskScrollButton'


const Footer = () => {
    return (
        <footer className="bck_red">

            <Fade delay={500}>
            <div className="font_righteous footer_logo_venue">
                The Venue
            </div>

            <div className="footer_copyright">
                The Venue 2019.All rights reserved
            </div>

{/* --------------------------- TaskScrollButton ------------------------ */}
            <TaskScrollButton/>

            </Fade> 

        </footer>
    );
};

export default Footer;
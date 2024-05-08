import React from 'react';
import "./hero.css"
import Typed from 'typed.js'

const Hero = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['A Front End Web Developer.', 'A Digital Marketer.', '&amp; A Freelancer'],
            typeSpeed: 50,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className="hero" id="home">
            <h1 className='text-center'>Sodiol Sayem</h1>
            <p className='mt-1 text-center'>I'm <span ref={el}></span></p>
        </div>
    );
};

export default Hero;
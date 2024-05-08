import "./about.css";
import logo from "../../assets/logo.jpg"

const About = () => {
    return (
        <div className="about row" id="about">
            <div className="about-text col-lg-5 col-12">
                <h2>Who <br />
                    am<br />
                    i?
                </h2>
                <p>I make websites <br/>
                using Html, css, js, JQuery <br/>
                bootstrap, React js</p>
                <p>A Web developer at Fiverr. I <br/ >
                specialize in Front End web development.<br/> 
                and responsive Web development.</p>
            </div>
            <div className="about-img col-lg-5 col-12">
                <img src={logo} className="img-fluid rounded"/>
            </div>
        </div>
    );
};

export default About;
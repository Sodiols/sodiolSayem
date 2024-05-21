import "./leftNavbar.css";
import logo from "../../assets/logo.jpg";
import { useEffect } from "react";

const LeftNavbar = () => {
    useEffect(() => {
        let navbar = document.querySelector('.container');
        let bars = document.querySelector('.bars');
        let cross = document.querySelector('.cross');

        const openNavbar = () => {
            navbar.style.display = "block";
            cross.style.display = "block";
            bars.style.display = "none";
        }

        const closeNavbar = () => {
            navbar.style.display = "none";
            cross.style.display = "none";
            bars.style.display = "block";
        }

        document.querySelector('.bars').addEventListener('click', openNavbar);
        document.querySelector('.cross').addEventListener('click', closeNavbar);

        return () => {
            document.querySelector('.bars').removeEventListener('click', openNavbar);
            document.querySelector('.cross').removeEventListener('click', closeNavbar);
        };
    }, []);

    return (
        <div className="NavBar">
            <div className="navBarBtns">
                <i className="fa-solid fa-bars navBarBtn bars"></i>
                <i className="fa-solid fa-xmark navBarBtn cross"></i>
            </div>
            <div className="container">
                <div className="profile">
                    <div className="name-img">
                        <img src={logo} className="logoImg rounded-circle" alt="logo"/>
                        <br />
                        <a href="#home">Sodiol Sayem</a>
                    </div>
                    <div className="links">
                        <a href="https://www.facebook.com/profile.php?id=100090420093597"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/sodiol_sayem/"><i className="bi bi-instagram"></i></a>
                        <a href="mailto:itssayem2023@gmail.com"><i className="bi bi-whatsapp"></i></a>
                    </div>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#home" className="active"><i className="bi bi-house-door"></i> <span>Home</span></a></li>
                        <li><a href="#about"><i className="bi bi-person-fill"></i> <span>About</span></a></li>
                        <li><a href="/"><i className="bi bi-file-earmark"></i> <span>Resume</span></a></li>
                        <li><a href="/"><i className="bi bi-person-vcard-fill"></i> <span>Portfolio</span></a></li>
                        <li><a href="/"><i className="bi bi-braces"></i> <span>Services</span></a></li>
                        <li><a href="/"><i className="bi bi-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </div>
                <div className="footer">
                    <p><span>©</span> Copyright <b>SodiolSayem.com</b></p>
                    <p>Designed by <a href="#">Sodiol Sayem</a></p>
                </div>
            </div>
        </div>
    );
};

export default LeftNavbar;

import "./leftNavbar.css"
import logo from "../../assets/logo.jpg"

const LeftNavbar = () => {
    let navbar = document.querySelector('.NavBar .container');
    let bars = document.querySelector('.bars');
    let cross = document.querySelector('.cross');
    const openNavbar = () => {
        navbar.style.display = "block";
        cross.style.display="block";
        bars.style.display="none;"
    }
    const closeNavbar = () => {
        navbar.style.display = "none";
        bars.style.display="block;"
        cross.style.display="none";
    }
    return (
        <div className="NavBar">
            <div className="navBarBtns">
                <i class="fa-solid fa-bars navBarBtn bars" onClick={openNavbar}></i>
                <i class="fa-solid fa-xmark navBarBtn cross" onClick={closeNavbar}></i>
            </div>
            <div className="container">
                <div className="profile">
                    <div className="name-img">
                        <img src={logo} className="logoImg rounded-circle" />
                        <br />
                        <a href="#home">Sodiol Sayem</a>
                    </div>
                    <div className="links">
                        <a href="https://www.facebook.com/profile.php?id=100090420093597"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/sodiol_sayem/"><i class="bi bi-instagram"></i></a>
                        <a href="mailto:itssayem2023@gmail.com"><i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#home"><i class="bi bi-house-door"></i> <span>Home</span></a></li>
                        <li><a href="#about"><i class="bi bi-person-fill"></i> <span>About</span></a></li>
                        <li><a href="/"><i class="bi bi-file-earmark"></i> <span>Resume</span></a></li>
                        <li><a href="/"><i class="bi bi-person-vcard-fill"></i> <span>Portfolio</span></a></li>
                        <li><a href="/"><i class="bi bi-braces"></i> <span>Services</span></a></li>
                        <li><a href="/"><i class="bi bi-envelope"></i> <span>Contact</span></a></li>
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
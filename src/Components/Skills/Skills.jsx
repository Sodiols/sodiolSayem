import "./skills.css";

const Skills = () => {
    return (
        <div className="skills">
            <h2 className="header-h2">Where am I <br /> Expert In?</h2>
            <div className="skills-cont">
                <span><i class="fa-brands fa-html5"></i> creating visually architect by HTMl</span> <br/>
                <hr />
                <span><i class="fa-brands fa-css3-alt"></i> Creates visually appealing designs using Tailwind CSS and Bootstrap CSS frameworks.</span> <br/>
                <hr />
                <span><i class="fa-brands fa-js"></i> Develops frontend features and functionality using Express.js and ES6 JavaScript.</span><br/>
                <hr />
                <span><i class="fa-brands fa-react"></i> Proficient in React for frontend development, creating dynamic and responsive user interfaces.</span> <br/>
                <hr />
                <span><i class="fa-solid fa-code"></i> Skilled in programming with C, C++, Python, and ES6 JavaScript for high-level application development.</span>
            </div>
        </div>
    );
};

export default Skills;
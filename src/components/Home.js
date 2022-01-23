import React from "react";
import avatar from "../assets/avatar.jpeg";
import github from "../assets/github.svg";
import medium from "../assets/medium.svg";
import linkedin from "../assets/linkedin.svg";

const Home = () => {
    return (
        <div class="rightpart">
            <div class="rightpart_in">
                <div class="tokyo_tm_section">
                    <div class="container">
                        <div class="tabcontent">
                            <div class="tokyo_tm_home">
                                <div class="home_content">
                                    <div class="avatar">
                                        <div
                                            class="image avatar_img"
                                            style={{
                                                backgroundImage: avatar,
                                            }}
                                        ></div>
                                    </div>
                                    <div class="details">
                                        <h3 class="name">Rodrigo Quispe</h3>
                                        <h5>Software Engineer</h5>
                                        <p class="job">
                                            I like about software technology, best programming practices and continuous learning.
                                        </p>
                                        <ul class="social">
                                            <li>
                                                <a href="https://www.linkedin.com/in/rodquispe/" target="_blank" rel="noreferrer">
                                                    <img src={linkedin} alt="linkedin" class="svg"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/rdquispe" target="_blank" rel="noreferrer">
                                                    <img src={github} alt="github" class="svg"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://medium.com/@rdquispe" target="_blank" rel="noreferrer">
                                                    <img src={medium} alt="medium" class="svg"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import backend from "../assets/backend.jpeg";

const About = () => {
    return (
        <div class="rightpart">
            <div class="rightpart_in">
                <div class="tokyo_tm_section">
                    <div class="container">
                        <div class="tabcontent">
                            <div class="tokyo_tm_about">
                                <div class="about_image">
                                    <img src={backend} alt="about"/>
                                </div>
                                <div class="description">
                                    <h3 class="name">Rodrigo Quispe | Software Engineer</h3>
                                    <div class="description_inner">
                                        <div class="left">
                                            <p>
                                                Hello
                                            </p>
                                        </div>
                                        <div class="right">
                                            <ul>
                                                <li>
                                                    <p>
                                                        <span>Study:</span>Universidad Mayor de San Andres
                                                    </p>
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
        </div>
    );
};

export default About;

import React from "react";

const Portfolio = () => {
    return (
        <div className="rightpart">
            <div className="rightpart_in">
                <div className="tokyo_tm_section">
                    <div className="container">
                        <div className="tabcontent">
                            <div className="tokyo_tm_portfolio">
                                <div className="tokyo_tm_title">
                                    <div className="title_flex">
                                        <div className="left">
                                            <span>Portfolio</span>
                                            <h3>Creative Portfolio</h3>
                                        </div>
                                        <div className="portfolio_filter">
                                            <ul>
                                                <li>
                                                    <a href="/" className="active">
                                                        All
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">Vimeo</a>
                                                </li>
                                                <li>
                                                    <a href="/">Youtube</a>
                                                </li>
                                                <li>
                                                    <a href="/">Mix</a>
                                                </li>
                                                <li>
                                                    <a href="/">Gallery</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabcontent">
                                    <ul className="portfolio_list">
                                        <li>
                                            <div className="inner">
                                                <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                    <img
                                                        src="http://tokyovue.ibthemespro.com/img/5.cf388f62.jpg"
                                                        alt="Portfolio"
                                                        className="image"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                    <img
                                                        src="http://tokyovue.ibthemespro.com/img/2.5df6b588.jpg"
                                                        alt="Portfolio"
                                                        className="image"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                    <img
                                                        src="http://tokyovue.ibthemespro.com/img/4.743bdc79.jpg"
                                                        alt="Portfolio"
                                                        className="image"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                    <img
                                                        src="http://tokyovue.ibthemespro.com/img/3.c0707af5.jpg"
                                                        alt="Portfolio"
                                                        className="image"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

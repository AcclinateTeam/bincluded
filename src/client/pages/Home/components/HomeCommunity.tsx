import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomeCommunity = () => {
    return (
        <>
            <section className="homecommunity">
                <div className="third columns one">
                    <div className="content">
                        <h2>Join our <span>Community</span></h2>
                        <p>Upon clicking the link to join the <span>B-INCLUDED</span> Community, our overarching community, NOWINCLUDED will walk you through the prompts. After completing, you will be a part of the <span>B-INCLUDED</span> Community and have access to all of NOWINCLUDED’S resources beyond the Jefferson Couty area.</p>
                    </div>
                    <div className="buttonwrap">
                        <a className="content button solid" href="https://app.nowincluded.com/share/4G6YaPVNDXWamfDM?utm_source=manual" target="_blank" rel="noopener noreferrer">Join The Community</a>
                    </div>
                </div>
                <div className="third columns two">
                    <div className="image">
                        <img src="images/theme/screens.png" alt="" />
                    </div>
                </div>
                <div className="third columns three">
                    <div className="container">
                        <div className="ten columns right">
                            <h3>What We <span>Offer</span></h3>
                            <ul>
                                <li><FontAwesomeIcon icon="star" />
                                    <p>Community Engagement</p>
                                </li>
                                <li><FontAwesomeIcon icon="star" />
                                    <p>Clinical Research Opportunities</p>
                                </li>
                                <li><FontAwesomeIcon icon="star" />
                                    <p>Educational Forums</p>
                                </li>
                                <li><FontAwesomeIcon icon="star" />
                                    <p>Shared Perspectives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="ten columns left">
                            <h3>Get <span>Started</span></h3>
                            <p>Download & Install our app from the Apple App Store or from Google Play.</p>
                            <a href="https://play.google.com/store/apps/details?id=com.mightybell.nowincluded" target="_blank" rel="noopener noreferrer">
                                <img src="images/theme/googleplay.png" alt="" />
                            </a>
                            <a href="https://apps.apple.com/ng/app/nowincluded/id1597990720" target="_blank" rel="noopener noreferrer">
                                <img src="images/theme/appstore.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCommunity;